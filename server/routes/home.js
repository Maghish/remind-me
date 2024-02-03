const express = require('express'); 
const { returnSample } = require('../controllers/homeControl');

const router = express.Router();

router.get('/', returnSample);

module.exports = router;