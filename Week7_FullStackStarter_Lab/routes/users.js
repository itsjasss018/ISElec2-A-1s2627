const express = require("express");
const router = express.Router();
const User = require("../models/User");

// CREATE
router.post("/", async (req, res) => {
try {
const user = await User.create(req.body);
return res.status(201).json(user);
} catch (err) {
return res.status(400).json({ error: err.message });
}
});

// READ ALL
router.get("/", async (req, res) => {
const users = await User.find().sort({ createdAt: -1 });
return res.json(users);
});

// UPDATE
router.put("/:id", async (req, res) => {
try {
const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
return res.json(updated);
} catch (err) {
return res.status(400).json({ error: err.message });
}
});

// DELETE
router.delete("/:id", async (req, res) => {
try {
await User.findByIdAndDelete(req.params.id);
return res.json({ message: "User deleted" });
} catch (err) {
return res.status(400).json({ error: err.message });
}
});

module.exports = router;