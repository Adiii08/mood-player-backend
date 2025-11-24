const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.YT_API_KEY;

app.get("/api/songs/:mood", async (req, res) => {
  try {
    const { mood } = req.params;
    const query = `${mood} hindi video songs`;

    const ytUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${API_KEY}&maxResults=10`;

    const response = await axios.get(ytUrl);

    res.json({
      songs: response.data.items.map((item) => ({
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        videoId: item.id.videoId,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      })),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch songs" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
