import { Data } from "./types";
import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
  readAndParseData,
} from "./utils";

const mainData: Data = readAndParseData("./data.json");
const revenue: number = calculateRevenue(mainData.data);
const expenses: number = calculateExpenses(mainData.data);
const grossProfitMargin: number = calculateGrossProfitMargin(mainData.data, revenue);
const netProfitMargin: number = calculateNetProfitMargin(revenue, expenses);
const workingCapitalRatio: number = calculateWorkingCapitalRatio(mainData.data);

console.log(`Revenue: ${revenue}`);
console.log(`Expenses: ${expenses}`);
console.log(`Gross Profit Margin: ${grossProfitMargin}`);
console.log(`Net Profit Margin: ${netProfitMargin}`);
console.log(`Working Capital Ratio: ${workingCapitalRatio}`);
