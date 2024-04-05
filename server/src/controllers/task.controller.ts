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

async function getTask(req: Request, res: Response) {
  try {
    const { id } = req.body;
    if (id === "") {
      const currentUser = await getCurrentUserData(req);
      const allTasks = await TaskModel.find({
        author: currentUser!.username,
        state: "Open",
      }).sort("rank");
      return res.status(200).json({
        message: "Successfully fetched all open tasks",
        task: allTasks,
      });
    }

    if (id === "Saved") {
      const currentUser = await getCurrentUserData(req);
      const allTasks = await TaskModel.find({
        author: currentUser!.username,
        state: "Saved",
      }).sort("rank");
      return res.status(200).json({
        message: "Successfully fetched all saved tasks",
        task: allTasks,
      });
    }
    
    if (id === "Closed") {
      const currentUser = await getCurrentUserData(req);
      const allTasks = await TaskModel.find({
        author: currentUser!.username,
        state: "Closed",
      }).sort("rank");
      return res.status(200).json({
        message: "Successfully fetched all closed tasks",
        task: allTasks,
      });
    } else {
      const task = await TaskModel.findById(id);
      return res
        .status(200)
        .json({ message: "Successfully fetched task", task: task });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

// async function changeTaskState(req: Request, res: Response) {
//   try {
//     const { id, state } = req.body;
//     const task = await TaskModel.findById(id);
//     task!.state = state;
//     const savedTask = await task!.save();
//     return res
//       .status(200)
//       .json({ message: "Successfully changed task state", task: savedTask });
//   } catch (error) {
//     return res.status(200).json({
//       message: error,
//     });
//   }
// }

async function notAvailableRanks(req: Request, res: Response) {
  try {
    const allTasks = await TaskModel.find({});
    let allUsedRanks: number[] = [];
    allTasks.forEach((task) => {
      allUsedRanks.push(task.rank);
    });
    return res.status(200).json({
      message: "Successfully fetched all used ranks",
      allUsedRanks: allUsedRanks,
    });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}

export {
  createTask,
  editTask,
  getTask,
  notAvailableRanks,
};
