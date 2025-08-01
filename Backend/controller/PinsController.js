import Pins from "../models/createPins.js";
import express from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

export const upload = multer({ storage });

export const CreatePins = async (req, res) => {
  console.log(req.body);
  // const userId=req.user

  try {
    const { title, description, link, boards, tags } = req.body;
    const images = req.file ? `/uploads/${req.file.filename}` : "";

    const newPin = new Pins({
      createdBy: req.user.id,
      title,
      description,
      link,
      boards,
      tags,
      images,
    });

    await newPin.save();
    res.status(201).json({ message: "Pin created successfully", pin: newPin });
  } catch (error) {
    console.error("Error creating pin:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const NewHome = async (req, res) => {
  try {
    const allPins = await Pins.find().populate("createdBy", "name email");
    res.status(200).json(allPins);
  } catch (err) {
    console.error("Error fetching pins:", err);
  }
};

export const PinDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user?.id;

    const pin = await Pins.findById(id).populate("comments.user", "email");

    if (!pin) {
      return res.status(404).json({ message: "Pin not found" });
    }

    const isLiked = userId ? pin.likes.includes(userId) : false;

    res.status(200).json({ pin, isLiked, likeCount: pin.likes.length });
  } catch (err) {
    console.log("Error fetching pin by id:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const Likes = async (req, res) => {
  try {
    const pinId = req.params.id;
    const userId = req.user.id;

    const pin = await Pins.findById(pinId);
    if (!pin) {
      return res.status(404).json("Pin not found");
    }

    let isLiked = false;

    if (pin.likes.includes(userId)) {
      // Unlike
      pin.likes = pin.likes.filter((id) => id.toString() !== userId);
    } else {
      // Like
      pin.likes.push(userId);
      isLiked = true;
    }

    await pin.save();
    res.status(200).json({ success: true, likes: pin.likes.length, isLiked });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const comments = async (req, res) => {
  try {
    const pinId = req.params.id;
    const userId = req.user; // yeh JWT middleware se mil raha hai

    const pin = await Pins.findById(pinId);
    if (!pin) {
      return res.status(404).json("Pin not found");
    }

    const { textComments } = req.body;

    // Naya comment object push karo
    pin.comments.push({
      user: userId.id,
      text: textComments,
    });

    // Save pin to apply defaults like createdAt
    await pin.save();

    // Populate user email in comments
    await pin.populate("comments.user", "email");
    console.log(" Populated Comments:", pin.comments);

    const commentsCount = pin.comments.length;

    res.status(200).json({
      updatedPin: pin,
      isComment: true,
      commentsCount,
    });
  } catch (err) {
    console.log(" Error saving comment:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
