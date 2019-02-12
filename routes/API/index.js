const router = require('express').Router();
const userRoutes = require('./userRoutes');
const recipeRoutes = require('./recipeRoutes');
const categoriesRoutes = require('./categoryRoutes');

router.use('/user', userRoutes);
router.use('/recipe', recipeRoutes);
router.use('/category', categoriesRoutes)

module.exports = router;