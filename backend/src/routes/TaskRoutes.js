const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacAddressValidation = require('../middlewares/MacAddressValidation');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskController.update);
router.get('/', MacAddressValidation, TaskController.findAll);
router.get('/:id', TaskController.findById);
router.delete('/:id', TaskController.delete);
router.put('/status/:id', TaskController.updateStatus);


module.exports = router;