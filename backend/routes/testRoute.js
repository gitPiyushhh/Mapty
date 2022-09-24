const express = require('express');
const router = express.Router({ mergeParams: true });

const testController = require('./../controllers/testController')


router.route('/').post(testController.createOne);
router.route('/:id').get(testController.getAll);

module.exports = router;