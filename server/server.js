const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const home = require('./routes/home');

dotenv.config();
const app = express();

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use('/api', home);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    })
})