const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname + "/public")));

const PORT = process.env.PORT || 5001;

// cors
const whitelist = ['http://localhost:5001', 'http://localhost:3000', 'https://htn-frontend-2024-c6b6c898bb5d.herokuapp.com', "https://htn-frontend-2024-c6b6c898bb5d.herokuapp.com/"];
const corsOptions = {
    origin:
        (origin, callback) => {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
    credentials: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// middleware for json
app.use(express.json());

// server status files
app.use(express.static(path.join(__dirname + "/public")));

//routes
app.use('/register', require('./src/routes/register'));
app.use('/auth', require('./src/routes/auth'));


app.listen(PORT);