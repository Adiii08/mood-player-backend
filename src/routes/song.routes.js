const express = require("express");
const Song = require("../models/song.model");

const router = express.Router();

// GET Hindi songs based on mood
router.get("/:mood", async (req, res) => {
  try {
    const mood = req.params.mood.toLowerCase();

    const songs = await Song.find({ mood });

    if (!songs.length) {
      return res.status(404).json({ message: "No songs found for this mood" });
    }

    res.json(songs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST: Add song manually through Postman
router.post("/", async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.json(newSong);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
