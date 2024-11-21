const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/TODO_task");

const taskSchema = new mongoose.Schema({
  task: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
