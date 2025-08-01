import express from "express";
const Router = express.Router();
import { Verification } from "../middlewares/jwt.js";

import {
  loginUser,
  SignupUser,
  savePin,
  pins,
  getBoards
} from "../controller/userController.js";
import { CreatePins, NewHome } from "../controller/PinsController.js";
import { upload } from "../controller/PinsController.js";
import { PinDetails, Likes, comments } from "../controller/PinsController.js";
import { boards} from "../controller/boardsController.js";

Router.post("/login", loginUser);
Router.post("/signup", SignupUser);
Router.post("/CreatePin", Verification, upload.single("images"), CreatePins);
Router.get("/NewHome", Verification, NewHome);
Router.get("/NewHome/:id", Verification, PinDetails);
Router.put("/likes/:id", Verification, Likes);
Router.put("/comments/:id", Verification, comments);
Router.post("/savePin/:id", Verification, savePin);
Router.get("/pins/:id",Verification,pins)
Router.post("/boards",Verification,boards)
Router.get ("/getBoards",Verification,getBoards)

export default Router;
