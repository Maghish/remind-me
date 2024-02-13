const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const home = require('./routes/home');
const auth = require('./routes/auth');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', home);
app.use('/auth', auth);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(process.env.PORT, () => {
        console.log(`listening on port ${process.env.PORT}`);
    })
})