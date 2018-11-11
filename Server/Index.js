const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const ctrl = require('./Controller');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(session({
    key: 'some-key',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    app.set('db', dbInstance);
}).catch(err => console.log(err));

app.post('/api/auth/login', ctrl.Login);
app.post('/api/auth/register', ctrl.Register);


const port = 3200;
app.listen(port, () => {console.log(`Listening and Operating on: ${port}`)});