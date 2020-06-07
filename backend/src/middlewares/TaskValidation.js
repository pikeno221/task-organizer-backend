const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns');

const TaskValidation = async (req, res, next) => {
    let exists;
    const { macaddress, category, title, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'macaddress must be not null' });

    else if (!category)
        return res.status(400).json({ error: 'category must be not null' });

    else if (!title)
        return res.status(400).json({ error: 'title must be not null' });

    else if (!description)
        return res.status(400).json({ error: 'description must be not null' });

    else if (!when || isPast(new Date(when)))
        return res.status(400).json({ error: 'when must be not null and after now. ' });


    if (req.params.id)
        exists = await TaskModel.findOne({ '_id': { '$ne': (req.params.id) }, 'when': { '$eq': new Date(when) }, 'macaddress': { '$in': macaddress } });
    else
        exists = await TaskModel.findOne({ 'when': { '$eq': new Date(when) }, 'macaddress': { '$in': macaddress } });

    if (exists)
        return res.status(422).json({ error: 'already exist task for this date: '.concat(when) });


    next();
}

module.exports = TaskValidation;