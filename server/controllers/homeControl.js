const mongoose = require('mongoose');

const taskModel = require('../models/taskModel');

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await taskModel.find({})
        res.status(200).json(allTasks);
    }
    
    catch (error) {
        res.status(400).json(error.message);
    }
}

const createNewTask = async (req, res) => {
    const {name, description, rank} = req.body;
    
    try {
        const newTask = await taskModel.create({name, description, rank});
        res.status(200).json(newTask);
    }

    catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllTasks,
    createNewTask
}