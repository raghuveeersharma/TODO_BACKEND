const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const Mongo_uri = process.env.Mongo_ATLAS_URL || process.env.MONGO_URI;
mongoose.connect(Mongo_uri);

const taskSchema = new mongoose.Schema({
  task: String,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
