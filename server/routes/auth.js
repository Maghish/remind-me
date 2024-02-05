const express = require('express');

const { getCurrentUser, createNewUser, logInUser } = require('../controllers/authControl');

const router = express.Router();

router.post('/auth/signupuser', createNewUser);
router.post('/auth/loginuser', logInUser);
router.get('/auth', getCurrentUser);

module.exports = router;