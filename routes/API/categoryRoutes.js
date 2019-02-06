const router = require('express').Router();
const categoriesController = require('../../controllers/categoriesController');



router.route('/:id')
    .post(categoriesController.create)
    .get(categoriesController.getCategories)
    .put(categoriesController.update)

router.route('/:id/delete')
    .put(categoriesController.remove)

module.exports = router;