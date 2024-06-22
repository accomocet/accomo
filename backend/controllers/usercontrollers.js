const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const path = require("path");
const getAllusers = async (req, res, next) => {
    try {
        const users = await User.find({});
        return res.json(users);
    } catch (error) {
        next(error);
    }
}

const loginuser = async (req, res, next) => {
  try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user) {
          // User not found
          return res.status(401).json({ error: "Incorrect Username or Password" });
      }
      
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (password!=user.password) {
          // Incorrect password
          return res.status(401).json({ error: "Incorrect Password" });
      }

   
      delete user.password;
      return res.json({ status: true, user });

  } catch (error) {
      next(error);
  }
}
 

const signup = async (req, res, next) => {
    try {
        const { username, password, email, usertype } = req.body;
        const user = await User.findOne({ username });
        if (user)
            return res.json({ msg: "Username already exists", status: false });
        const em = await User.findOne({ email });
        if (em)
            return res.json({ msg: "Email already exists", status: false });

      //  const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password,//: hashedPassword,
            email,
            usertype,
        });
        console.log("New user is added");
        return res.json({ status: true, newUser });
    } catch (error) {
        next(error);
    }
}
const logout=(req,res,next)=>{
  try {
    if (!req.params.id) return res.json({ msg: "User id is required " });
    onlineUsers.delete(req.params.id);
    return res.status(200).send();
  } catch (ex) {
    next(ex);
  }

};
const showLoginPage = (req, res) => {
  // Render the login Pug template
  res.render(path.join(__dirname, "../views/login.pug"));
};
const showSignPage = (req, res) => {
  // Render the template
  res.render(path.join(__dirname, "../views/signup.pug"));
};


module.exports = { getAllusers, loginuser, signup,logout,showLoginPage,showSignPage };
