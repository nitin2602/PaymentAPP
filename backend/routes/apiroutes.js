import express from "express";
import { Router } from "express";
import userRoutes from "./user.routes.js";
import accountsRoutes from "./accounts.routes.js";

let router  = Router();

export default router = Router();
 router.use("/user", userRoutes)
 router.use("/accounts",accountsRoutes)