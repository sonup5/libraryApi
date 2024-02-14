const userModel = require("../model/user");
const bcrypt = require("bcrypt");

async function handleSignUp(req, res, next) {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log(username, email, password);
    const isPresent = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    console.log(isPresent);

    if (!isPresent) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
       

          await userModel.create({
            userName: username,
            email: email,
            password: hash,
          });
        });
      });
      return res.json({ msg: "user created successfully" }).status(200);
    } else {
      return res.json({ msg: "user already exist" }).status(409);
    }
  } catch (err) {
    return res.json({ msg: err }).status(500);
  }
}
module.exports = handleSignUp;
