import fs from "fs";

export const readAndParseData = (): any[] => {
  try {
    const rawData = fs.readFileSync("./data.json", "utf-8");
    return JSON.parse(rawData);
  } catch (error: any) {
    console.error("Error while reading or parsing the file:", error.message);
    process.exit(1);
  }
};
