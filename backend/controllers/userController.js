const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require("../models/userModel");

// GET all users
const getUsers = (req, res) => {
  const users = getAllUsers();
  res.status(200).json(users);
};

// GET single user
const getUser = (req, res) => {
  const { id } = req.params;
  const user = getUserById(Number(id));

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
};

// CREATE user
const createNewUser = (req, res) => {
  const { name, email } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (!email) {
    emptyFields.push("email");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: `Please fill in all the field`, emptyFields });
  }

  /* if (!name || !email) {
    return res.status(400).json({ error: "name and email are required" });
  }
*/
  const newUser = createUser(name, email);
  res.status(201).json(newUser);
};

// DELETE user
const deleteUser = (req, res) => {
  const { id } = req.params;
  const deletedUser = deleteUserById(Number(id));

  if (!deletedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(deletedUser);
};

// UPDATE user
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const updatedUser = updateUserById(Number(id), name, email);

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(updatedUser);
};

module.exports = {
  getUsers,
  getUser,
  createNewUser,
  deleteUser,
  updateUser,
};
