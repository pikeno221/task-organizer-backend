const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskController.update);
//router.get('/', TaskController.findAll);
//router.get('/:id', TaskController.findById);


module.exports = router;