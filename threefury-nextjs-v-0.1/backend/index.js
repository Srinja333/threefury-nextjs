const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const projectDetailRoutes=require("./routes/projectDetailRoutes")
const cors=require('cors');

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data
app.use(cors());
app.use("/api/projectDetails", projectDetailRoutes);

const PORT = process.env.PORT;

app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`.yellow.bold)
);