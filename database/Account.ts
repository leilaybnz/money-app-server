import db from "./db.json";

export const getSavings = () => {
  return db.savingsAccount.ars;
};

export const getAllShares = () => {
  return db.savingsAccount.shares;
};

export const getShare = (shareName) => {
  const share = db.savingsAccount.shares.find(
    (share) => share.name === shareName
  );
  if (!shareName) {
    return null;
  }
  return share;
};
