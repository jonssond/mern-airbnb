const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./config.env") });
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const download = require("image-downloader");

const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("Database connected!");
});

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

app.use("/user", userRouter);
app.post("/upload-by-link", async (req, res, next) => {
  const { link } = req.body;
  const newName = Date.now() + ".jpg";
  await download.image({
    url: link,
    dest: __dirname + "\\uploads\\" + newName,
  });
  res.status(200).json({
    status: "success",
    path: newName,
  });
});

app.listen(3000);
