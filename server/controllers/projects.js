import express from "express";
import cors from "cors";
import { setUpConnection } from "../utils/setUpConnection.js";

const app = express();

app.use(cors());

export const addProject = (req, res) => {
  const userID = 1;
  const projectImage = req.file ? req.file.filename : null;
  const pattern = "TBD";
  const {
    fabric = null,
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
    entryDate = null,
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
  notes,
  entryDate)
  VALUES 
  (${userID}, 
  ${projectImage ? `'${projectImage}'` : "NULL"}, 
  ${projectName ? `'${projectName}'` : "NULL"},
  '${pattern}',
  ${fabric ? `'${projectName}'` : "NULL"}, 
  ${projectStatus ? `'${projectStatus}'` : "NULL"}, 
  ${haveAllSupplies ? `'${haveAllSupplies}'` : "NULL"}, 
  ${deadline ? `'${deadline}'` : "NULL"}, 
  ${startDate ? `'${startDate}'` : "NULL"}, 
  ${dateCompleted ? `'${dateCompleted}'` : "NULL"}, 
  ${sizeMade ? `'${sizeMade}'` : "NULL"}, 
  ${lengthOfFabricUsed ? `'${lengthOfFabricUsed}'` : "NULL"}, 
  ${threadUsed ? `'${threadUsed}'` : "NULL"}, 
  ${fittingNotes ? `'${fittingNotes}'` : "NULL"}, 
  ${notes ? `'${notes}'` : "NULL"},
  ${entryDate ? `'${entryDate}'` : "NULL"})`;

  con.query(sql, (err, rows) => {
    con.destroy();
    if (!err) {
      res.send(JSON.stringify(rows));
    } else {
      console.log("Error while performing Query.", err);
    }
  });
};

//fetch fabrics

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

export const getProjectByID = (req, res) => {
  const { id } = req.params;
  const con = setUpConnection();

  let sql = `SELECT * FROM projects WHERE id = ?`;

  con.query(sql, [id], (err, rows) => {
    con.destroy();
    if (!err) {
      if (rows.length > 0) {
        res.send(JSON.stringify(rows[0]));
      } else {
        res.status(404).send({ message: "Project not found" });
      }
    } else {
      console.log("Error while performing Query.", err);
      res.status(500).send({ message: "Server error" });
    }
  });
};
