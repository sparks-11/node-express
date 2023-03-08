const { getAllTasks, createUser } = require("../services/test.service");

const getTasks = async (req, res) => {
  const result = await getAllTasks(req);
  res.send(result);
};

const registerUser = async (req, res) => {
  const data = req.body;
  console.log("this is the request data", data);
  const result = await createUser(data);
  res.send(result);
};

module.exports = {
  getTasks,
  registerUser,
};
