const mongoose = require("mongoose");

const taskModel = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  const { creatorID } = req.body;

  try {
    const allTasks = await taskModel.find({ creatorID: creatorID });
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createNewTask = async (req, res) => {
  const { name, description, rank, creatorID } = req.body;

  try {
    const newTask = await taskModel.create({
      name,
      description,
      rank,
      creatorID,
    });
    res.status(200).json(newTask);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const editTaskName = async (req, res) => {
  const { id, name, creatorID } = req.body;

  try {
    const task = await taskModel.findById(id);
    if (task.creatorID === creatorID) {
      task.name = name;
      res.status(200).json(task);
    }
  } catch (error) {
    throw error;
  }
};

const editTaskDesc = async (req, res) => {
  const { id, description, creatorID } = req.body;

  try {
    const task = await taskModel.findById(id);
    if (task.creatorID === creatorID) {
      task.description = description;
      res.status(200).json(task);
    }
  } catch (error) {
    throw error;
  }
};
const editTaskRank = async (req, res) => {
  const { id, rank, creatorID } = req.body;

  try {
    const task = await taskModel.findById(id);
    if (task.creatorID === creatorID) {
      task.rank = rank;
      res.status(200).json(task);
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  createNewTask,
  editTaskName,
  editTaskDesc,
  editTaskRank,
};
