import express from "express";
import taskController from "../controller/taskController";
const router = express.Router();

router.get("/", taskController.getAllTasks);

export default router;
