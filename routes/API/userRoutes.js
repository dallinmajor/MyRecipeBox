const router = require('express').Router();
const UserController = require('../../controllers/userControllers');

router.route('/')
    .post(UserController.create)

router.route('/all')
    .get(UserController.findAll)

router.route('/:id')
    .get(UserController.findById)

router.route('/validate/:username')
    .get(UserController.Validate)

module.exports = router;