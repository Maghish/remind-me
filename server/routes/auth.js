const express = require('express');

const { getCurrentUser, createNewUser, logInUser } = require('../controllers/authControl');

const router = express.Router();

router.post('/signupuser', createNewUser);
router.post('/loginuser', logInUser);
router.get('/', getCurrentUser);

module.exports = router;