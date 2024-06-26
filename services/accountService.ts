import {
  getSavings,
  getAllShares,
  getShare,
  buyShares,
  sellShares,
  updateShareQuotation,
  getFullAmount,
} from "../database/Account";
import { QuotationSharesPayload } from "../types";

export const getSavingsService = () => {
  const savings = getSavings();
  return savings;
};

export const getAllSharesService = () => {
  const allShares = getAllShares();
  return allShares;
};

export const getShareService = (shareName: string) => {
  const share = getShare(shareName);
  return share;
};

export const buySharesService = (shareName: string, amount: number) => {
  buyShares(shareName, amount);
};

export const sellSharesService = (shareName: string, amount: number) => {
  sellShares(shareName, amount);
};

export const updateSharesQuotationsService = (
  quotations: QuotationSharesPayload
) => {
  updateShareQuotation(quotations);
};

export const getFullAmountService = () => {
  const fullAmount = getFullAmount();
  return fullAmount;
};
