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
app.use(
  cors({
    origin: [
      'http://localhost:3000',                  // For development
      'https://expense-tracker-jcyt.vercel.app' // For production
    ],
    credentials: true,
  })
);


  
app.use(cookieParser());
app.use(express.json());


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