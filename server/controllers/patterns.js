import express from "express";
import dotenv from "dotenv";
import { createConnection } from "mysql";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../../.env") });

const app = express();

app.use(cors());

const setUpConnection = () => {
  return createConnection({
    host: "localhost",
    user: "root",
    // eslint-disable-next-line no-undef
    password: process.env.password,
    database: "sys",
    port: "3306",
  });
};

export const addPattern = (req, res) => {
  const userID = 1;
  const {
    patternImage = null,
    patternCompany = null,
    otherPatternCompany = null,
    patternNumber = null,
    patternName = null,
    sizeRange = null,
    patternType = null,
    otherPatternType = null,
    printOrPDF = null,
    isPDFPrinted = null,
    cutOut = null,
    sizeCutOut = null,
    fabricRequirements = null,
    notionsRequired = null,
    purchaseDate = null,
    yearReleased = null,
    forWovenOrKnit = null,
    recommendedFabricTypes = null,
    purchasedFrom = null,
    notes = null,
  } = req.body;
  const con = setUpConnection();
  console.log(req.body);

  let sql = `INSERT INTO patterns
    (userID,     
    patternImage,
    patternCompany,
    otherPatternCompany,
    patternNumber,
    patternName,
    sizeRange,
    patternType,
    otherPatternType,
    printOrPDF,
    isPDFPrinted,
    cutOut,
    sizeCutOut,
    fabricRequirements,
    notionsRequired,
    purchaseDate,
    yearReleased,
    forWovenOrKnit,
    recommendedFabricTypes,
    purchasedFrom,
    notes) 
    VALUES 
    (${userID}, 
    ${patternImage ? `'${patternImage}'` : "NULL"}, 
    ${patternCompany ? `'${patternCompany}'` : "NULL"}, 
    ${otherPatternCompany ? `'${otherPatternCompany}'` : "NULL"}, 
    ${patternNumber ? `'${patternNumber}'` : "NULL"}, 
    ${patternName ? `'${patternName}'` : "NULL"}, 
    ${sizeRange ? `'${sizeRange}'` : "NULL"}, 
    ${patternType ? `'${patternType}'` : "NULL"}, 
    ${otherPatternType ? `'${otherPatternType}'` : "NULL"}, 
    ${printOrPDF ? `'${printOrPDF}'` : "NULL"}, 
    ${isPDFPrinted ? `'${isPDFPrinted}'` : "NULL"}, 
    ${cutOut ? `'${cutOut}'` : "NULL"}, 
    ${sizeCutOut ? `'${sizeCutOut}'` : "NULL"}, 
    ${fabricRequirements ? `'${fabricRequirements}'` : "NULL"}, 
    ${notionsRequired ? `'${notionsRequired}'` : "NULL"}, 
    ${purchaseDate ? `'${purchaseDate}'` : "NULL"}, 
    ${yearReleased ? `'${yearReleased}'` : "NULL"}, 
    ${forWovenOrKnit ? `'${forWovenOrKnit}'` : "NULL"}, 
    ${recommendedFabricTypes ? `'${recommendedFabricTypes}'` : "NULL"}, 
    ${purchasedFrom ? `'${purchasedFrom}'` : "NULL"}, 
    ${notes ? `'${notes}'` : "NULL"})`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};

export const getPattern = (req, res) => {
  const con = setUpConnection();
  let sql = `SELECT * FROM patterns`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};
