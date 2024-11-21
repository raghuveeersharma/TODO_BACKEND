const express = require("express");
const Task = require("./models/task");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/task", (req, res) => {
  // take the tasks front end save to db
  const { task } = req.body;
  const newTask = new Task({ task });
  newTask
    .save()
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to create task" });
    });
  console.log(newTask);
});

app.get("/tasks", async (req, res) => {
  // send the tasks data to front end
  await Task.find()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
  console.log(` data send`);
});

app.delete("/task/:id", async (req, res) => {
  const taskId = req.params.id;
  await Task.findByIdAndDelete(taskId)
    .then(() => {
      res.status(200).json({ message: "Task deleted successfully" });
      console.log(`task ${taskId} deleted`);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to delete task" });
    });
});

app.put("/task/:id", async (req, res) => {
  const taskId = req.params.id;
  const { task } = req.body;
  await Task.findByIdAndUpdate(taskId, { task })
    .then(() => {
      res.status(200).json({ message: "Task updated successfully" });
      console.log(`task ${taskId} updated`);
    })
    .catch((error) => {
      res.status(500).json({ error: "Failed to update task" });
    });
});
app.listen(5000, () => {
  // server listen
  console.log("Server is running on port 5000");
});