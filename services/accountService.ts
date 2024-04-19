import { getSavings, getAllShares, getShare } from "../database/Account";

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
