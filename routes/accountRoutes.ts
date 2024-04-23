import express from "express";
import {
  getSavingsController,
  getAllSharesController,
  getShareController,
  buySharesController,
  sellSharesController,
  updateSharesQuotationsController,
  getFullAmountController,
} from "../controllers/accountControllers";

export const router = express.Router();

router.get("/savingsAccount", getSavingsController);
router.get("/savingsAccount/shares", getAllSharesController);
router.get("/savingsAccount/fullAmount", getFullAmountController);
router.get("/savingsAccount/shares/:shareName", getShareController);
router.post("/savingsAccount/shares/:shareName/buy", buySharesController);
router.post("/savingsAccount/shares/:shareName/sell", sellSharesController);
router.post("/savingsAccount/shares", updateSharesQuotationsController);
