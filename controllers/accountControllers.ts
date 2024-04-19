import { Request, Response } from "express";
import {
  getSavingsService,
  getAllSharesService,
  getShareService,
} from "../services/accountService";

export const getSavingsController = (req: Request, res: Response) => {
  try {
    const savings = getSavingsService();
    res.send({ status: "OK", data: savings });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getAllSharesController = (req: Request, res: Response) => {
  try {
    const allShares = getAllSharesService();
    res.send({ status: "OK", data: allShares });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getShareController = (req: Request, res: Response) => {
  const {
    params: { shareName },
  } = req;

  if (!shareName) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':shareName' cannot be empty." },
    });
  }

  try {
    const share = getShareService(shareName);

    if (!share) {
      return res.status(404).send({
        status: "NOT_FOUND",
        data: { error: `Share with name ${shareName} was not found.` },
      });
    }

    res.send({ status: "OK", data: share });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
