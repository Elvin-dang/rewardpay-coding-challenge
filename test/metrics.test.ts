import {
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateRevenue,
  calculateWorkingCapitalRatio,
} from "../src/utils";

describe("Financial Metrics Calculations", () => {
  const sampleData = [
    {
      account_category: "revenue",
      account_code: "200",
      account_currency: "AUD",
      account_identifier: "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
      account_status: "ACTIVE",
      value_type: "credit",
      account_name: "Sales",
      account_type: "sales",
      account_type_bank: "",
      system_account: "",
      total_value: 1000,
    },
    {
      account_category: "expense",
      account_code: "400",
      account_currency: "AUD",
      account_identifier: "d392fe47-c99d-499e-a200-46709dd6b6e7",
      account_name: "Advertising",
      account_status: "ACTIVE",
      system_account: "",
      value_type: "debit",
      account_type_bank: "",
      total_value: 2000,
      account_type: "overheads",
    },
    {
      account_category: "revenue",
      account_code: "200",
      account_currency: "AUD",
      account_identifier: "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
      account_status: "ACTIVE",
      value_type: "credit",
      account_name: "Sales",
      account_type: "sales",
      account_type_bank: "",
      system_account: "",
      total_value: 3000,
    },
    {
      account_category: "liability",
      account_code: "400",
      account_currency: "AUD",
      account_identifier: "d392fe47-c99d-499e-a200-46709dd6b6e7",
      account_name: "Advertising",
      account_status: "ACTIVE",
      system_account: "",
      value_type: "debit",
      account_type_bank: "",
      total_value: 4000,
      account_type: "overheads",
    },
    {
      account_category: "liability",
      account_code: "200",
      account_currency: "AUD",
      account_identifier: "e2bacdc6-2006-43c2-a5da-3c0e5f43b452",
      account_status: "ACTIVE",
      value_type: "debit",
      account_name: "Sales",
      account_type: "sales",
      account_type_bank: "",
      system_account: "",
      total_value: 5000,
    },
    {
      account_category: "assets",
      account_code: "400",
      account_currency: "AUD",
      account_identifier: "d392fe47-c99d-499e-a200-46709dd6b6e7",
      account_name: "Advertising",
      account_status: "ACTIVE",
      system_account: "",
      value_type: "debit",
      account_type_bank: "",
      total_value: 6000,
      account_type: "overheads",
    },
    {
      account_category: "expense",
      account_code: "400",
      account_currency: "AUD",
      account_identifier: "d392fe47-c99d-499e-a200-46709dd6b6e7",
      account_name: "Advertising",
      account_status: "ACTIVE",
      system_account: "",
      value_type: "debit",
      account_type_bank: "",
      total_value: 7000,
      account_type: "overheads",
    },
    {
      account_category: "assets",
      account_code: "400",
      account_currency: "AUD",
      account_identifier: "d392fe47-c99d-499e-a200-46709dd6b6e7",
      account_name: "Advertising",
      account_status: "ACTIVE",
      system_account: "",
      value_type: "credit",
      account_type_bank: "",
      total_value: 8000,
      account_type: "overheads",
    },
  ];

  test("Calculate Revenue", () => {
    const revenue = calculateRevenue(sampleData);
    expect(revenue).toBe(4000);
  });

  test("Calculate Expenses", () => {
    const expenses = calculateExpenses(sampleData);
    expect(expenses).toBe(9000);
  });

  test("Calculate Gross Profit Margin", () => {
    const revenue = calculateRevenue(sampleData);
    const grossProfitMargin = calculateGrossProfitMargin(sampleData, revenue);
    expect(grossProfitMargin).toBe(125);
  });

  test("Calculate Net Profit Margin", () => {
    const revenue = calculateRevenue(sampleData);
    const expenses = calculateExpenses(sampleData);
    const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
    expect(netProfitMargin).toBe(-125);
  });

  test("Calculate Working Capital Ratio", () => {
    const workingCapitalRatio = calculateWorkingCapitalRatio(sampleData);
    expect(workingCapitalRatio).toBe(NaN);
  });
});
