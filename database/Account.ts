import db from "./db.json";

export const getSavings = () => {
  return db.savingsAccount.ars;
};

export const getAllShares = () => {
  return db.savingsAccount.shares;
};
