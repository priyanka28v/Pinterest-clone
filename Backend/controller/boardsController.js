import Board from "../models/board.js";
import User from "../models/users.js";

export const boards = async (req, res) => {
  try {
    const userId = req.user.id;
    const { boardName } = req.body;
    console.log(req.body);

    const existingBoard = await Board.findOne({
      boardName: boardName,
      createdBy: userId,
    });

    if (existingBoard) {
      return res
        .status(400)
        .json({ message: "Make sure to enter a unique board name" });
    }

    const newBoard = new Board({ boardName, createdBy: userId });
    await newBoard.save();
    await User.findByIdAndUpdate(
      req.user.id, 
      { $push: { boards: newBoard._id } }, 
      { new: true } 
    );

    // console.log(newBoard);

    res
      .status(201)
      .json({ message: "Board created successfully", board: newBoard });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// export const getBoards = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const boards = await Board.find({ createdBy: userId });

//     if (!boards || boards.length === 0) {
//       return res.status(200).json([]);
//     }
//     console.log(boards)
//     res.status(200).json(boards);
//   } catch (err) {
//     console.error("Error fetching boards:", err);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
