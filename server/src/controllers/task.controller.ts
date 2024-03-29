import TaskModel from "../models/task.model";
import { Request, Response } from "express";
import { getCurrentUserData } from "./auth.controller";
import taskModel from "../models/task.model";

async function createTask(req: Request, res: Response) {
  try {
    const { name, description, rank, state } = req.body;
    const currentUser = await getCurrentUserData(req);
    if (currentUser) {
      const newTask = new TaskModel({
        author: currentUser.username,
        name: name,
        description: description,
        rank: rank,
        state: state,
      });

      const savedTask = await newTask.save();

      return res.status(200).json({
        message: "Successfully created task!",
        newTask: savedTask,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

async function editTask(req: Request, res: Response) {
  try {
    const { id, name, description, rank, state } = req.body;
    const task = await TaskModel.findById(id);
    if (task) {
      task.name = name;
      task.description = description;
      task.rank = rank;
      task.state = state;
      const editedTask = await task.save();
      return res.status(200).json({
        message: "Successfully edited the task",
        editedTask: editedTask,
      });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export { createTask, editTask };
