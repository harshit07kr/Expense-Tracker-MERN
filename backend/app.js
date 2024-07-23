const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const path = require('path');
const { readdirSync } = require('fs');
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
const routesPath = path.join(__dirname, 'routes');
console.log('Routes Path:', routesPath); // Debugging line

try {
  readdirSync(routesPath).map((route) => app.use('/', require(path.join(routesPath, route))));
} catch (error) {
  console.error('Error reading routes directory:', error);
}
const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()