const express = require("express");
const userModal = require("../modal/userModal");
const userRouter = express.Router();

userRouter.post("/createdata", async (req, res) => {
    const {firstname, lastname, mobile, message, email} = req.body;
    console.log({firstname, email});


    try{
        const existingUser = await userModal.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: "user Already exist"});
        }

        const result = await userModal.create({
            firstname: firstname,
            email: email,
            lastname: lastname,
            mobile: mobile,
            message: message
        });

        res.status(201).json({createdUser: result, status: "success"})
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
});

module.exports = userRouter;