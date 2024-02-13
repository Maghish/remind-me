const express = require('express');

const { getAllTasks, createNewTask } = require('../controllers/homeControl');

const router = express.Router();

router.post('/gettasks', getAllTasks);
router.post('/createtask', createNewTask);

module.exports = router;