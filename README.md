## Overview

An application reads data from a JSON file (`data.json`) and calculates the following financial metrics:

- **Revenue**
- **Expenses**
- **Gross Profit Margin**
- **Net Profit Margin**
- **Working Capital Ratio**

## Technologies Used

- **JavaScript** of **TypeScript**
- **Node.js**
- **Jest** for unit testing

## Installation

Follow the steps below to set up the project on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/Elvin-dang/rewardpay-coding-challenge.git
```

### 2. Install Dependencies

Navigate to the project directory and install the necessary dependencies:

```bash
cd rewardpay-coding-challenge
npm install
```

This will install Jest and other required packages.

## How to Run the Application

To run the application, simply execute the following command in the project directory:

```bash
npm run dev
```

This will read the data from `data.json`, calculate the required metrics, and display them in the console.

Alternatively, you can run:

```bash
npm run build
npm start
```

This will create a build folder `dist` and execute it.

### Example Output

```
Revenue: $32,431
Expenses: $36,529
Gross Profit Margin: 0%
Net Profit Margin: -12.6%
Working Capital Ratio: 118.8%
```

## How to Run Tests

To run the tests and verify that everything is working correctly, run the following command:

```bash
npm run test
```

Jest will run the test suite and output the results to the console. You should see tests for each metric and their expected values.

## Project Structure

Here is the structure of the project:

```
/rewardpay-coding-challenge
│
├── src
│   ├── index.ts               # Main application file that runs the calculations
│   ├── types.ts               # Type definitions for the application
│   ├── utils.ts               # Module containing the functions for each metric calculation
├── test
│   ├── metrics.test.ts        # Unit tests for the metrics
├── .gitignore                 # Git ignore file to exclude files from version control
├── data.json                  # Input data file containing the financial records
├── jest.config.ts             # Jest configuration file
├── package-lock.json          # Lock file for installed dependencies
├── package.json               # Project dependencies and scripts
├── README.md                  # Project documentation
└── tsconfig.json              # TypeScript configuration file
```
