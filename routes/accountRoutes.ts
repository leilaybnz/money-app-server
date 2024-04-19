import express from "express";
import {
  getSavingsController,
  getAllSharesController,
} from "../controllers/accountControllers";

export const router = express.Router();

router.get("/savingsAccount", getSavingsController);
router.get("/savingsAccount/shares", getAllSharesController);
