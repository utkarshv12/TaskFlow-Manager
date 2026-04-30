const router = require("express").Router();
const auth = require("../middleware/auth");
const Task = require("../models/Task");
const Project = require("../models/Project");

// Dashboard stats
router.get("/", auth, async (req, res) => {
  try {
    const userId = req.user.id;

    const totalProjects = await Project.countDocuments({
      createdBy: userId,
    });

    const totalTasks = await Task.countDocuments();

    const completedTasks = await Task.countDocuments({
      status: "done",
    });

    const pendingTasks = await Task.countDocuments({
      status: { $ne: "done" },
    });

    const overdueTasks = await Task.countDocuments({
      dueDate: { $lt: new Date() },
      status: { $ne: "done" },
    });

    res.json({
      totalProjects,
      totalTasks,
      completedTasks,
      pendingTasks,
      overdueTasks,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;