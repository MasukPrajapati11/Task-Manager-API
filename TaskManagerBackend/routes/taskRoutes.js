const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Task = require("../models/Task");

router.get("/test ", auth, (req, res) => {
  res.json({
    message: "Task route is working",
    user: req.user,
  });
});

//CRUD operations for tasks can be added here

//create a new task
router.post("/", auth, async (req, res) => {
  try {
    //description, completed from req.body
    //owner : req.user._id
    const task = new Task({
      ...req.body,
      owner: req.user._id,
    });
    await task.save();
    res.status(201).json({ task, message: "Task created successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

//get user's tasks
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id });
    res.status(200).json({
      tasks,
      message: "Tasks retrieved successfully",
      count: tasks.length,
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//fetch a specific task by id
router.get("/:id", auth, async (req, res) => {
  const taskid = req.params.id;
  try {
    const task = await Task.findOne({
      _id: taskid,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    } else {
      res.status(200).json({ task, message: "Task retrieved successfully" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//update a task by id-description, completed
router.patch("/:id", auth, async (req, res) => {
  const taskid = req.params.id;
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description", "completed"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const task = await Task.findOne({ _id: taskid, owner: req.user._id });
    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    }
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.json({
      task,
      message: "Task updated successfully",
    });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

//delete a task by id
router.delete("/:id", auth, async (req, res) => {
  const taskid = req.params.id;
  try {
    const task = await Task.findOneAndDelete({
      _id: taskid,
      owner: req.user._id,
    });
    if (!task) {
      return res.status(404).send({ error: "Task not found" });
    } else {
      res.status(200).json({ task, message: "Task Deleted successfully" });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
