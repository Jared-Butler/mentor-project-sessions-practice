const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();



const app = express();


let {
    SERVER_PORT
} = process.env;




app.use(bodyParser.json());








app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});