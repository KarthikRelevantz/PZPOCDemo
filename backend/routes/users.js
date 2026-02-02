const express = require("express");
const router = express.Router();

const {
  getUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createNewUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

module.exports = router;
