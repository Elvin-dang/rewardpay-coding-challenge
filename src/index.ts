import { Data } from "./types";
import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
  formatCurrency,
  formatPercentage,
  readAndParseData,
} from "./utils";

const mainData: Data = readAndParseData("./data.json");
const revenue: number = calculateRevenue(mainData.data);
const expenses: number = calculateExpenses(mainData.data);
const grossProfitMargin: number = calculateGrossProfitMargin(mainData.data, revenue);
const netProfitMargin: number = calculateNetProfitMargin(revenue, expenses);
const workingCapitalRatio: number = calculateWorkingCapitalRatio(mainData.data);

console.log(`Revenue: ${formatCurrency(revenue)}`);
console.log(`Expenses: ${formatCurrency(expenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${formatPercentage(workingCapitalRatio)}`);
