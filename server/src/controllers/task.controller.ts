import TaskModel from "../models/task.model";
import { Request, Response } from "express";
import { getCurrentUserData } from "./auth.controller";

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

      await newTask.save();

      return res.status(200).json({
        message: "Successfully created task!",
        newTask: newTask,
      });
    }
      
  } catch (error) {
    return res.status(400).json({ message: error });
  } 
}

export {
  createTask
}