const express = require("express");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.json({extended: false}));
connectDB();
app.use("/api/user/", userRoutes);
app.listen(process.env.PORT || 5000, () => {
  console.log("Server running at port", process.env.PORT);
});

module.exports = app;
