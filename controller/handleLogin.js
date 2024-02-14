const userModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
async function handleLogin(req, res, next) {
  try {
    const userNameOrEmail = req.body.userField;
    const password = req.body.password;

    console.log("Received credentials:", userNameOrEmail, password);

    const user = await userModel.findOne({
      $or: [{ userName: userNameOrEmail }, { email: userNameOrEmail }],
    });
    console.log(user);

    if (!user) {
      return res.json({ msg: "invalid credentials" }).status(401);
    }

    const isMatch = await bcrypt.compare(password, user.password);
    

    if (!isMatch) {
      return res
        .json({ msg: "Invalid credentials: Incorrect password" })
        .status(401);
    }
   const token= jwt.sign({userName:user.userName,email:user.email},"sonu1234");
    res.json({ message: "Login successful",token:token }).status(200);
  } catch (error) {
    console.error("Error during login:", error);
  }
}
module.exports = handleLogin;

