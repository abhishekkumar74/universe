const user = require("../models/userModels");

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const createdUser = await user.create(data);
    return res.status(201).json({ data: createdUser, message: "User Created" });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { createUser };
