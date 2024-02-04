const express = require('express');

const { getAllTasks, createNewTask } = require('../controllers/homeControl');

const router = express.Router();

router.get('/', getAllTasks);
router.post('/create', createNewTask);

module.exports = router;