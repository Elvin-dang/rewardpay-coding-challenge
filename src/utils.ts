import fs from "fs";
import { AccountData, Data } from "./types";

/* Data Processing */

export const readAndParseData = (path: string): Data => {
  try {
    const rawData = fs.readFileSync(path, "utf-8");
    return JSON.parse(rawData);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error while reading or parsing the file:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    process.exit(1);
  }
};

/* Business */

// Revenue
export const calculateRevenue = (data: AccountData[]): number => {
  return data
    .filter((a) => a.account_category === "revenue")
    .reduce((s, r) => s + r.total_value, 0);
};

// Expenses
export const calculateExpenses = (data: AccountData[]): number => {
  return data
    .filter((a) => a.account_category === "expense")
    .reduce((s, r) => s + r.total_value, 0);
};

// Gross Profit Margin
export const calculateGrossProfitMargin = (data: AccountData[], revenue: number): number => {
  const salesDebit = data
    .filter((a) => a.account_type === "sales" && a.value_type === "debit")
    .reduce((s, r) => s + r.total_value, 0);
  return (salesDebit / revenue) * 100;
};

// Net Profit Margin
export const calculateNetProfitMargin = (revenue: number, expenses: number): number => {
  return ((revenue - expenses) / revenue) * 100;
};

// Working Capital Ratio
export const calculateWorkingCapitalRatio = (data: AccountData[]): number => {
  const assets = data
    .filter(
      (a) =>
        a.account_category === "assets" &&
        ["current", "bank", "current_accounts_receivable"].includes(a.account_type)
    )
    .reduce((s, r) => (r.value_type === "debit" ? s + r.total_value : s - r.total_value), 0);

  const liabilities = data
    .filter(
      (a) =>
        a.account_category === "liability" &&
        ["current", "current_accounts_payable"].includes(a.account_type)
    )
    .reduce((s, r) => (r.value_type === "credit" ? s + r.total_value : s - r.total_value), 0);

  return (assets / liabilities) * 100;
};
