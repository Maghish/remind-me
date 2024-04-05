import { Router } from "express";
import { getTask, editTask, createTask, notAvailableRanks, changeTaskState } from "../controllers/task.controller";
import protect from "../middlewares/auth.middleware";

const router = Router();

router.post("/gettask", protect, getTask);
router.post("/edittask", protect, editTask);
router.post("/createtask", protect, createTask);
router.post("/changetaskstate", protect, changeTaskState);
router.get("/notavailableranks", protect, notAvailableRanks);

export default router;