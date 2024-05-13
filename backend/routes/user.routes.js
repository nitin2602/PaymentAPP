import "dotenv/config";
import { Router } from "express";
import { z } from "zod";
import { User } from "./../modals/user.modals.js";
import jwt from "jsonwebtoken";
import usermiddleware from "../middleware/authmiddleware.js";
import { Accounts } from "./../modals/account.modals.js";

let router = Router();
const UserSchema = z.object({
  username: z.string().email(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
});
const signinBody = z.object({
  username: z.string().email(),
  password: z.string(),
});
export default router = Router();
router.post("/signup", async function (req, res, next) {
  const { username, firstName, lastName, password } = req.body;
  const valid = UserSchema.safeParse({
    username: username,
    firstName: firstName,
    lastName: lastName,
    password: password,
  });
  const existingUser = await User.findOne({
    username: username,
  });

  if (valid.success && !existingUser) {
    User.create({
      username,
      firstName,
      lastName,
      password,
    }).then((user) => {
      const userID = user._id;
      console.log(userID);
      Accounts.create({ userId: userID, balance: 5000 });
      const token = jwt.sign({ userID }, process.env.JWT_SECRET);
      res.status(200).json({
        message: "User created successfully",
        token: token,
        userID: userID,
      });
    });
  } else {
    res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }
});
router.post("/signin", async function (req, res, next) {
  const { username, password } = req.body;
  const { success } = signinBody.safeParse({ username, password });
  if (!success) {
    return res.status(411).json({
      message: "Incorrect inputs",
    });
  }
  const user = await User.findOne({
    username: username,
    password: password,
  });

  if (user) {
    const token = jwt.sign(
      {
        userID: user._id,
      },
      process.env.JWT_SECRET
    );

    res.json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});

router.put("/", usermiddleware, async function (req, res, next) {
  const { password, firstName, lastName } = req.body;

  let data = await User.updateOne(
    { _id: req.userID },
    { password, firstName, lastName }
  );
  if (data) {
    res.json({
      message: "Updated successfully",
    });
  } else {
    res.json({
      message: "Some Errors occur !",
    });
  }
});
router.get("/bulk", usermiddleware, async function (req, res, next) {
  let filter = req.query.filter || "";
  const users = await User.find({});

  res.json({
    user: users.map((user) => ({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      _id: user._id,
    })),
  });
});
