
//initialize Module 
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const PORT = 3000;

const api = require('./routes/api')// API path

const app = express(); //Use Express
app.use(cors())
app.use(bodyparser.json())
app.use('/api', api)

app.use('/static', express.static('./static'));

app.get('/', function (req, res) {
    res.send('hello from server')  //Make sure that the backend part works well on PORT 3000

})


app.listen(PORT, function () {

    console.log('server running on localhost PORT : ' + PORT);

})