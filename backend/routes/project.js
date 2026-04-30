const express = require("express");
const router = express.Router();

const Project = require("../models/Project");
const auth = require("../middleware/auth");

// ✅ Create Project
router.post("/", auth, async (req, res) => {
  try {
    const project = await Project.create({
      name: req.body.name,
      createdBy: req.user.id,
      members: req.body.members || []
    });

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get All Projects
router.get("/", auth, async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("createdBy", "name email")
      .populate("members", "name email");

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Get Single Project
router.get("/:id", auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("createdBy", "name email")
      .populate("members", "name email");

    if (!project) {
      return res.status(404).json("Project not found");
    }

    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Update Project
router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Delete Project
router.delete("/:id", auth, async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json("Project deleted");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;