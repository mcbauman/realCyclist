const express = require("express");
const checkAuth = require("../middleware/checkAuth");
const checkAdmin = require("../middleware/checkAdmin.js");
const crypto = require("../helpers/crypto");
const jwt = require("jsonwebtoken");
const UserSchema = require("../schemas/userSchema");

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
  console.log("REQUEST on /login", req.body);
  try {
    const user = await UserSchema.findOne({ name: req.body.name });
    if (!user) {
      res.status(401).send("user not found");
    } else {
      const loginSuccess = await crypto.compare(
        req.body.password,
        user.password
      );
      if (!loginSuccess) {
        res.status(401).send("wrong password");
      } else {
        const token = jwt.sign({ uid: user._id }, process.env.SECRET, {
          expiresIn: "1d",
        });
        // res.send(JSON.stringify({...user._doc,token:`Bearer ${token}`}))
        res.send(
          JSON.stringify({ 
            _id: user._doc._id,
            name: user._doc.name, 
            colorSchema: user._doc.colorSchema, 
            role: user._doc.role, 
            token: `Bearer ${token}` })
        );
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userRouter.get("/getAllUsers", checkAdmin.checkAdmin, async (req, res) => {
  console.log("/getAllUsers");
  try {
    const result = await UserSchema.find();
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userRouter.post("/createUser", async (req, res) => {
  console.log("REQUEST on /createUser", req.body);
  try {
    req.body.password = await crypto.hash(req.body.password);
    const result = await UserSchema.create(req.body);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userRouter.put("/updateUser", checkAuth.checkAuth, async (req, res) => {
  console.log("UpdateUser", req.user._id);
  console.log("UPDATEUSER", req.body);
  try {
    const result = await UserSchema.findByIdAndUpdate(
      req.user._id,
      req.body.user,
      { new: true }
    );
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userRouter.delete("/deleteUser", checkAdmin.checkAdmin, async (req, res) => {
  console.log("/delereUser", req.body._id);
  try {
    const result = await UserSchema.findByIdAndDelete(req.body._id);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = userRouter;
