const express = require('express');
const cors = require('cors');
const server = express();
server.use(cors());
server.use(express.json());


const TaskRoutes = require('./routes/TaskRoutes');
server.use('/tasks', TaskRoutes);

server.listen(3333, function() {
    console.log('API ONLINE');
});