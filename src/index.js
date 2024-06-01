const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");
const cors = require("cors");

const app = express();

// Apply CORS middleware before defining routes
app.use(cors());

app.get("/", (req, res) => {
    res.send("working");
});

app.use(express.json());
app.use("/user", userRouter);

mongoose.connect("mongodb+srv://admin:admin@cluster0.en2sb1b.mongodb.net/")
    .then(() => console.log("database connected"))
    .catch((err) => console.log(err));

app.listen(5000, () => {
    console.log("server is started");
});
