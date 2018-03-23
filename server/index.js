require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const massive = require("massive");
const bodyParser = require("body-parser");


const controller = require("./controllers/controller");

const { CONNECTION_STRING, SESSION_SECRET } = process.env;

const port = 3001;

const app = express();

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
)

//Database Connection //
massive(CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
    }) .catch(console.log);


// Endpoints //
app.post('/api/auth/login', controller.loginUser);
// app.post('/api/auth/register', controller.registerUser);
// app.post('/api/auth/logout', controller.destroyUser);
app.get('/menu', controller.getMenuItems);
app.get('/menu/:id', controller.getFoodById);
app.post('/add', controller.addMenuItem);
app.delete('/delete/:id', controller.deleteItem);




app.use(json());
app.use(cors());

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});