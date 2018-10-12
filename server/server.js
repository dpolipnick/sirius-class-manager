// bring in the students from the sirius module
// and setup express w/ all the things

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('server/public'));

// Here is my GET request stuff

//This is retrieving 'students' array from the module file
const sirius = require('./modules/sirius.js');

app.get('/sirius', (req, res) => {
    console.log('GET request for Sirius class');
    res.send(sirius); 
});
// end my GET request stuff

const port= 5000;
app.listen(port, () => {
    console.log(`Express is listening on port ${port}...`);
});// end listening and port code
