const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");
const cors = require("cors");
require('dotenv').config()

const app = express();

// Apply CORS middleware before defining routes
app.use(cors());

app.get("/", (req, res) => {
    res.json("working");
});

app.use(express.json());
app.use("/user", userRouter);
console.log(process.env.MONGODB_URL)

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log("server is started");
});
