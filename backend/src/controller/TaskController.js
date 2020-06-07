const TaskModel = require('../model/TaskModel')


class TaskController {

    async create(req, res) {
        const task = new TaskModel(req.body);
        await task.save()
            .then(response => { res.status(201).json(response); })
            .catch(error => { res.status(200).json(error); });
    }

    async update(req, res) {
        await TaskModel.findByIdAndUpdate({ '_id': req.params.id }, req.body, { new: true })
            .then(response => { res.status(200).json(response); })
            .catch(error => { res.status(422).json(error); })
    }

    /*
    async findAll(req, res) {
        await TaskModel.findAll()
            .then(response => { res.status(200).json(response); })
            .catch(error => { res.status(422).json(error); })
    }
    */
}



module.exports = new TaskController();