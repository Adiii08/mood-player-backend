const express = require("express");
const connectDB = require("./db/db");
const cors = require("cors");
const songRoutes = require("./routes/song.routes");

require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use("/api/songs", songRoutes);

module.exports = app;
