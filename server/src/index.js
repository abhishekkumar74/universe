const express = require("express");
const mongoose = require("mongoose");
const route = require("../src/routes/route"); 
const app = express();
const PORT = 8000;
const URL =
  "mongodb+srv://abhishek:myPassword@cluster0.w8zdbxc.mongodb.net/user";

app.use(express.json());

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", route); // Use the routes

app.listen(PORT, () => {
  console.log("App is running on port 8000");
});
