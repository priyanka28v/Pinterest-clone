import user from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const SignupUser = async (req, res) => {
  try {
    const { email, password, birthdate } = req.body;
    const User = await user.findOne({ email });
    console.log(User);
    if (User) {
      return res.json({ message: "user already exits" });
    }
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new user({
      email,
      password: hashedPassword,
      birthdate,
    });
    await newUser.save();
    res.json({ message: "user created successfully" });
  } catch (err) {
    console.log(err);
    res.json({ message: "error created" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    const exitingUser = await user.findOne({ email });
    console.log(exitingUser);
    if (!exitingUser) {
      return res.json({ message: "please signUp first" });
    }
    const isMatch = await bcrypt.compare(password, exitingUser.password);
    if (!isMatch) {
      return res.json({ message: "Invalid Credencials" });
    }
    const token = jwt.sign(
      { id: exitingUser._id, email: exitingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    res.cookie("token", token, { httpOnly: true });
    // Token ko browser ke cookie mein save kar diya jaata hai (httpOnly - JS se access nahi kiya ja sakta).
    return res.status(200).json({ message: "Login successful", token });
    // Response ke saath token bhi frontend ko bhej diya jaata hai.
  } catch (err) {
    console.log(err);
  }
};
