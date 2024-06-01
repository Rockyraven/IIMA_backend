const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");
const cors = require("cors");
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 5001

// Apply CORS middleware before defining routes
app.use(cors());

app.get("/", (req, res) => {
    res.json("working");
});

app.use(express.json());
app.use("/user", userRouter);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log("server is started");
});
