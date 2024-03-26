const express = require('express');
const app = express();
// app.use(express.json());
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth.js');
const apiRoutes = require('./routes/api.js');

// configure the environment variables
const dotenv = require('dotenv');
dotenv.config();

// cors config
const cors = require('cors');
const bodyParser = require('body-parser');

// configure the database by just calling the singleton object of Database class
const db = require('./db-config.js');


// use the cors middleware 
app.use(cors({ origin: ['http://localhost:3000', 'http://localhost:3000/', 'https://ai-model-client.vercel.app/', 'https://ai-model-client.vercel.app'], methods: ['GET', 'POST', 'PATCH', 'DELETE'], credentials: true }));
console.log("Hello world!!");

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.all('/', (req, res) => {
    console.log("Request received successfully");
});

app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// listen
const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
    if(err) console.log(`There is an error starting the server at PORT: ${PORT}`);
    else console.log(`Server started successfully at PORT: ${PORT}`);
});



