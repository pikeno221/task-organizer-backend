const express = require('express');
const server = express();
server.use(express.json());

const TaskRoutes = require('./routes/TaskRoutes');
server.use('/tasks', TaskRoutes);

server.listen(3000, function() {
    console.log('API ONLINE');
});