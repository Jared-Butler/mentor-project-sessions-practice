const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const session = require('express-session');

const app = express();


let {
    SERVER_PORT,
    SESSION_SECRET
} = process.env;



//Sets up your session capability
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json());

///////////DUMMY USER DATA//////////
let userArray = [
    {
        name: "Thor Odinson",
        username: "thor",
        password: "1234"
    },
    {
        name: "Bruce Banner",
        username: "banner",
        password: "5678"
    },
    {
        name: "Captain Marvel",
        username: "marvel",
        password: "1234"
    }
]




///////////ENDPOINTS///////////

app.get("/api/show_consoles", function(req, res){
    console.log(req.session)
    res.sendStatus(200)
})

app.post("/api/login", function(req, res){
    let {username, password} = req.body

    userArray.forEach(val => {
        if(username===val.username && password === val.password){
            console.log("First log: ", req.session.user)
            req.session.user = val;
            console.log("Second log: ", req.session.user)
        }
    })

    if(req.session.user){
        res.status(200).send(req.session.user)
    } else {
        res.status(404).send("Sorry, that user wasn't found")
    }
})

app.get("/api/get_current_user", function(req, res){
    console.log("Current user: ", req.session.user)
    res.status(200).send(req.session.user)
})

app.post("/api/logout", function(req, res){
    console.log("req.session before destroy: ", req.session)
    req.session.destroy();
    console.log("req.session after destroy: ", req.session)
    res.status(200).send(req.session);
})








app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});