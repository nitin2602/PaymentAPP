import "dotenv/config";
import jwt from "jsonwebtoken";
export default function usermiddleware(req, res, next) {
  const usertoken = req.headers.authorization;
  console.log(usertoken)
  const user = jwt.verify(usertoken, process.env.JWT_SECRET);

  req.userID = user.userID;

  next();
}
