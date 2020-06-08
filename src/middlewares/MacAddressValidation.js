const TaskModel = require('../model/TaskModel');

const MacAddressValidation = async (req, res, next) => {
    const macaddress = req.header('macaddress');
    
    if (!macaddress) 
        return res.status(400).json({ error: 'macAddress must not be null' });
    let exists;


    if (macaddress) { 
        exists = await TaskModel.find({ 'macaddress': { '$in': macaddress } });
    }

    if (!exists)
    return res.status(422).json({ error: 'No task found for mac addres: '.concat(macaddress) });

    next();
    

}

module.exports = MacAddressValidation;