const express = require('express');

const { getCurrentUser, createNewUser, logInUser } = require('../controllers/authControl');

const router = express.Router();

router.post('/signupuser', createNewUser);
router.post('/loginuser', logInUser);
router.post('/', getCurrentUser);

module.exports = router;