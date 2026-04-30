const Project = require("../models/Project");
const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {
  const userId = req.user.id;

  const totalProjects = await Project.countDocuments({ createdBy: userId });

  const totalTasks = await Task.countDocuments({ assignedTo: userId });

  const completedTasks = await Task.countDocuments({
    assignedTo: userId,
    status: "done"
  });

  const pendingTasks = await Task.countDocuments({
    assignedTo: userId,
    status: "todo"
  });

  res.json({
    totalProjects,
    totalTasks,
    completedTasks,
    pendingTasks,
    overdueTasks: 0
  });
};