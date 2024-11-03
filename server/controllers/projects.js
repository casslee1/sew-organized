import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addProject = (req, res) => {
  const userID = 1;
  const projectImage = req.file ? req.file.filename : null;
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
  projectImage,
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
  ${projectImage ? `'${projectImage}'` : "NULL"}, 
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
