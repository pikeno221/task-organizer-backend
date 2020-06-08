const mongoose = require('mongoose');

const url ='mongodb://localhost:27017/todo';

mongoose.set('useFindAndModify', false);
mongoose.connect(url, { useNewUrlParser: true});


module.exports = mongoose;