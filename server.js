const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes')
// const db = require('./config/dbKey');

const PORT = process.env.PORT || 5000;

// Multi-process to utilize all CPU cores.
if (cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  
  // mongoose.connect(
  //   process.env.MONGODB_URI || db,
  //   { useNewUrlParser: true }
  // );

  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );

  const app = express();

  app.use(bodyParser.json({ useNewUrlParser: true }));
  app.use(router);

  app.use(express.static(path.resolve(__dirname, './client/build')));

  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
  });
}
