import { Request, Response } from "express";
import {
  getSavingsService,
  getAllSharesService,
  getShareService,
  buySharesService,
  sellSharesService,
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

export const buySharesController = (req: Request, res: Response) => {
  const {
    params: { shareName },
    body: { amount },
  } = req;

  if (!shareName) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':shareName' cannot be empty." },
    });
  }
  if (!amount) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Property 'amount' cannot be empty." },
    });
  }

  try {
    buySharesService(shareName, amount);

    res.send({ status: "OK" });
  } catch (error: any) {
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof error.message === "string" &&
      error.message.includes("Share not found")
    ) {
      return res.status(404).send({
        status: "NOT_FOUND",
        data: { error: `Share with name ${shareName} was not found.` },
      });
    }

    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const sellSharesController = (req: Request, res: Response) => {
  const {
    params: { shareName },
    body: { amount },
  } = req;

  if (!shareName) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':shareName' cannot be empty." },
    });
  }
  if (!amount) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Property 'amount' cannot be empty." },
    });
  }

  try {
    sellSharesService(shareName, amount);

    res.send({ status: "OK" });
  } catch (error: any) {
    if (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof error.message === "string" &&
      error.message.includes("Share not found")
    ) {
      return res.status(404).send({
        status: "NOT_FOUND",
        data: { error: `Share with name ${shareName} was not found.` },
      });
    }

    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};