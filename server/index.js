const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.get("/test/:Username", (req, res) => {
  console.log(req.query);
  res.send({ message: "This is a test endpoint!", moreData: "moreData" });
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
