const users = [];
let nextId = 1;

const getAllUsers = () => users;

const getUserById = (id) => users.find((u) => u.id === id);

const addUser = (name, email) => {
  const user = { id: nextId++, name, email };
  users.push(user);
  return user;
};

const deleteUserById = (id) => {
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) return null;
  return users.splice(index, 1)[0];
};

const updateUserById = (id, name, email) => {
  const user = users.find((u) => u.id === id);
  if (!user) return null;

  if (name) user.name = name;
  if (email) user.email = email;

  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  deleteUserById,
  updateUserById,
};
