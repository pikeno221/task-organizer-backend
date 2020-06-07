const express = require('express');
const server = express();

server.get('/teste', (req, res) => {
    res.send('BACKEND is OK');
})

server.listen(3000, function() {
    console.log('API ONLINE');
});