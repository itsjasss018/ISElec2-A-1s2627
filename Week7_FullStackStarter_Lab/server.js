const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const usersRouter = require("./routes/users");

const app = express();

// Body parsers (required so req.body will not be undefined)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api/users", usersRouter);

// Test route
app.get("/api/health", (req, res) => res.json({ status: "ok" }));

// Mongo connect + start server
async function start() {
try {
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected");

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
console.error("Startup error:", err.message);
process.exit(1);
}
}

start();
 