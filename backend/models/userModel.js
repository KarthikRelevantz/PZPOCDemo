let users = [];
let nextId = 1;

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

const createUser = (name, email) => {
  const newUser = {
    id: nextId++,
    name,
    email,
  };

  users.push(newUser);
  return newUser;
};

const deleteUserById = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;

  return users.splice(index, 1)[0];
};

const updateUserById = (id, name, email) => {
  const user = users.find((user) => user.id === id);
  if (!user) return null;

  if (name) user.name = name;
  if (email) user.email = email;

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
};
