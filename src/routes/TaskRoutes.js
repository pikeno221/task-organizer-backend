const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');
const TaskValidation = require('../middlewares/TaskValidation');
const MacAddressValidation = require('../middlewares/MacAddressValidation');

router.get('/today', MacAddressValidation, TaskController.findToday);
router.get('/week', MacAddressValidation, TaskController.findWeek);
router.get('/month', MacAddressValidation, TaskController.findMonth);
router.get('/year', MacAddressValidation, TaskController.findMonth);
router.get('/overdue', MacAddressValidation, TaskController.findOverdue);
router.get('/all', MacAddressValidation, TaskController.findAll);
router.get('/:id', TaskController.findById);

router.post('/', TaskValidation, TaskController.create);

router.put('/status/:id', TaskController.updateStatus);
router.put('/:id', TaskController.update);

router.delete('/:id', TaskController.delete);

module.exports = router;