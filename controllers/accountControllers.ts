import { Request, Response } from "express";
import {
  getSavingsService,
  getAllSharesService,
} from "../services/accountService";

export const getSavingsController = (req: Request, res: Response) => {
  try {
    const savings = getSavingsService();
    res.send({ status: "OK", data: savings });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getAllSharesController = (req: Request, res: Response) => {
  try {
    const allShares = getAllSharesService();
    res.send({ status: "OK", data: allShares });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
