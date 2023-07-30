require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.get('/', (req, res) => {
    res.send('helloword')
})

server.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT);
})
