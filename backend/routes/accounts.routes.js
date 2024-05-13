import { Router } from "express";
import usermiddleware from "./../middleware/authmiddleware.js";
import { Accounts } from "./../modals/account.modals.js";
import mongoose from "mongoose";

let router = Router();
export default router = Router();
router.get("/bulk", function (req, res, next) {
  res.send("Accounts routes working");
});
router.post("/transfer", usermiddleware, async function (req, res, next) {
  const session = await mongoose.startSession();

  session.startTransaction();
  const { amount, to } = req.body;
  const account = await Accounts.findOne({ userId: req.userID }).session(
    session
  );

  if (!account || account.balance < amount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Insufficient balance or Not Registered User",
    });
  }

  const toAccount = await Accounts.findOne({ userId: to }).session(session);

  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
      message: "Invalid account",
    });
  }

  await Accounts.updateOne(
    { userId: req.userID },
    { $inc: { balance: -amount } }
  ).session(session);
  await Accounts.updateOne(
    { userId: to },
    { $inc: { balance: amount } }
  ).session(session);

  // Commit the transaction
  await session.commitTransaction();
  res.json({
    message: "Transfer successful",
  });
});
router.get("/balance", usermiddleware, async function (req, res, next) {
  const useracc = await Accounts.findOne({
    userId: req.userID,
  });
  res.status(200).json({
    balance: useracc.balance,
  });
});
