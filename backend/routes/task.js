const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

// Create task
router.post("/", auth, async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      description: req.body.description,
      project: req.body.projectId,
      assignedTo: req.body.assignedTo,
      dueDate: req.body.dueDate,
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get tasks by project
router.get("/:projectId", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId })
      .populate("assignedTo", "name email");

    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update status
router.put("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;