import mongoose from "mongoose";
// import User from "../models/users.js"

const PinSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  title: { type: String },
  description: { type: String },
  link: { type: String },
  boards: { type: String },
  tags: { type: String },
  images: { type: String },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
      text: {type:String},
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Pins = mongoose.model("Pins", PinSchema);
export default Pins;
