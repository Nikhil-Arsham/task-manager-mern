const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((error) => {
  console.log(error);
});

app.get("/", (req, res) => {
  res.send("Task Manager API Running");
});

app.post("/tasks", async (req, res) => {

  try {

    const newTask = new Task(req.body);

    await newTask.save();

    res.status(201).json(newTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

app.get("/tasks", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

app.delete("/tasks/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});