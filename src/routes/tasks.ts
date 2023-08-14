import express from "express";
import taskController from "../controller/taskController";
const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createOneTask);

export default router;
