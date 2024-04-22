import fs from "fs";

export const readDB = () => {
  return JSON.parse(
    fs.readFileSync("./database/db.json", { encoding: "utf-8" })
  ) as DB;
};

export const saveToDatabase = (db: DB) => {
  fs.writeFileSync("./database/db.json", JSON.stringify(db, null, 2), {
    encoding: "utf-8",
  });
};

export interface DB {
  savingsAccount: SavingsAccount;
}

export interface SavingsAccount {
  cash: Cash[];
  shares: Share[];
}

export interface Cash {
  currency: string;
  amount: number;
}

export interface Share {
  name: string;
  currency: string;
  price: number;
  availableShares: number;
  quantityOwned: number;
  quotationDate: string;
}
