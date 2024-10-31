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

export const addProject = (req, res) => {
  const userID = 1;
  const pattern = "TBD";
  const fabric = "TBD";
  const {
    projectName = null,
    projectStatus = null,
    haveAllSupplies = null,
    deadline = null,
    startDate = null,
    dateCompleted = null,
    sizeMade = null,
    lengthOfFabricUsed = null,
    threadUsed = null,
    fittingNotes = null,
    notes = null,
  } = req.body;
  const con = setUpConnection();
  console.log(req.body);

  let sql = `INSERT INTO projects
  (userID, 
  projectName, 
  pattern,
  fabric,
  projectStatus, 
  haveAllSupplies, 
  deadline, 
  startDate, 
  dateCompleted, 
  sizeMade, 
  lengthOfFabricUsed, 
  threadUsed, 
  fittingNotes, 
  notes)
  VALUES 
  (${userID}, 
  ${projectName ? `'${projectName}'` : "NULL"},
  '${pattern}',
  '${fabric}', 
  ${projectStatus ? `'${projectStatus}'` : "NULL"}, 
  ${haveAllSupplies ? `'${haveAllSupplies}'` : "NULL"}, 
  ${deadline ? `'${deadline}'` : "NULL"}, 
  ${startDate ? `'${startDate}'` : "NULL"}, 
  ${dateCompleted ? `'${dateCompleted}'` : "NULL"}, 
  ${sizeMade ? `'${sizeMade}'` : "NULL"}, 
  ${lengthOfFabricUsed ? `'${lengthOfFabricUsed}'` : "NULL"}, 
  ${threadUsed ? `'${threadUsed}'` : "NULL"}, 
  ${fittingNotes ? `'${fittingNotes}'` : "NULL"}, 
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

export const getProject = (req, res) => {
  const con = setUpConnection();
  let sql = `SELECT * FROM projects`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};
