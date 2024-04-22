import { saveToDatabase, readDB } from "./utils";
import { QuotationSharesPayload } from "../types";

export const getSavings = () => {
  return readDB().savingsAccount.cash;
};

export const getAllShares = () => {
  return readDB().savingsAccount.shares;
};

export const getShare = (shareName: string) => {
  const share = readDB().savingsAccount.shares.find(
    (share) => share.name === shareName
  );
  if (!shareName) {
    return null;
  }
  return share;
};

export const buyShares = (shareName: string, amount: number) => {
  const clonedDB = readDB();
  const account = clonedDB.savingsAccount;
  const savings = account.cash[0].amount;
  const shares = account.shares;
  const share = shares.find((share) => share.name === shareName);

  if (!share) {
    throw new Error("Share not found");
  }

  account.shares.forEach((share) => {
    if (share.name === shareName) {
      if (share.availableShares < amount) {
        throw new Error(
          "No contamos con las suficientes acciones disponibles."
        );
      }

      const totalAmount = share.price * amount;

      if (totalAmount > savings) {
        throw new Error(
          "No contas con la cantidad de dinero suficiente para realizar esta operacion"
        );
      }

      account.cash[0].amount = savings - totalAmount;
      share.quantityOwned = share.quantityOwned + amount;
      share.availableShares = share.availableShares - amount;
    }
  });

  saveToDatabase(clonedDB);
};
