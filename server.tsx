import path from 'path';
import express from 'express';
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

console.log('hello');

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// cors
const whitelist = ['http://localhost:5001', 'http://localhost:3000'];
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

// middleare for json
app.use(express.json());

// server static files
app.use('/', express.static(path.join(__dirname, '/public')));

// routes
// app.use('/', require('./server/routes/root'));
app.use('/register', require('./server/routes/register'));
app.use('/auth', require('./server/routes/auth'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));