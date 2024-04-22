import {
  getSavings,
  getAllShares,
  getShare,
  buyShares,
  sellShares,
} from "../database/Account";

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