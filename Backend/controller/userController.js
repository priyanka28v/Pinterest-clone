import user from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

//signupuser

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

//loginuser

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

// savedPins
export const savePin = async (req, res) => {
  const { id: pinId } = req.params;
  const userId = req.user.id; // from middleware

  try {
    const existingUser = await user.findById(userId);

    if (!existingUser)
      return res.status(404).json({ message: "User not found" });

    if (!existingUser.savedPins) {
      existingUser.savedPins = [];
    }

    const alreadySaved = existingUser.savedPins.includes(pinId);
    console.log(alreadySaved);

    if (alreadySaved) {
      existingUser.savedPins.pull(pinId);
      await existingUser.save();
      return res.json({ message: "Pin is unsaved", isSaved: false });
    } else {
      existingUser.savedPins.push(pinId);
      await existingUser.save();
      return res.json({ message: "Pin is saved", isSaved: true });
    }
  } catch (err) {
    console.log("savePin error ", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
