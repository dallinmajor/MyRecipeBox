const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Recipe
            .find({user: req.params.userId})
            .then(data => res.json(data))
            .catch(err => res.status(402).json(err));
    },
    findById: (req, res) => {
        db.Recipe
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    create: (req, res) => {
        db.Recipe
            .create(req.body)
            .then(recipe => {
                db.User
                .findByIdAndUpdate(req.params.id, {
                    $push: { recipes: recipe._id}
                })
                .then(result => {
                    if(result) {
                        res.json(recipe)
                    } else {
                        res.send(false)
                    }
                })
                .catch(err => console.log(err))
            })
            .catch(err => res.status(402).json(err));
    },
    update: (req, res) => {
        db.Recipe
            .findByIdAndUpdate(req.params.id, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(402).json(err));
    },
    remove: (req, res) => {
        db.Recipe
            .findByIdAndDelete(req.params.id)
            .then(dbModel => dbModel.remove())
            .then(
                db.User
                    .findByIdAndUpdate(req.params.userId, {
                        $pull: { recipes: req.params.id }
                    })
                    .then(res.send('Deleted!'))
            )
            .catch(err => res.status(402).json(err))
    }
}