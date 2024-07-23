const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const {readdirSync} = require('fs')
const cookieParser = require('cookie-parser');
const app = express()

require('dotenv').config()

const PORT = process.env.PORT


//middlewares
app.use(express.json())
app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  
app.use(cookieParser());


//routes
readdirSync('./routes').map((route) => app.use('/', require('./routes/' + route)))

const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()