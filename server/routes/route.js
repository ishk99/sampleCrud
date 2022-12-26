// Routes for the endpoints declared in api.js file

import express from "express";
import {
  addUser,
  editUser,
  getUsers,
  getUser,
  deleteUser,
} from "../controller/userController.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/all", getUsers);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.delete("/:id", deleteUser);
export default router;
