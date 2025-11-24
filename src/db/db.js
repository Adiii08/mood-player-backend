const mongoose = require("mongoose");

function connectDB() {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ MongoDB Connection Error:", err));
}

module.exports = connectDB;
