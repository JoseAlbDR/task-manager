import express from "express";
import taskController from "../controller/taskController";
const router = express.Router();

router
  .route("/")
  .get(taskController.getAllTasks)
  .post(taskController.createOneTask);

router
  .route("/:taskId")
  .get(taskController.getOneTask)
  .patch(taskController.updateOneTask)
  .delete(taskController.deleteOneTask);

export default router;
