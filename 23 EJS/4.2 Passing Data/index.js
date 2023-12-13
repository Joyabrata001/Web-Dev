import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var fNameValue = "";
var lNameValue = "";

app.get("/", (req, res) => {
  console.log("First Name Requested");
  const data = {
    fNameValue: "",
    lNameValue: "",
    namelength: fNameValue.length + lNameValue.length,
  }
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  console.log("New Name Requested");
  fNameValue = req.body["fName"];
  lNameValue = req.body["lName"];
  const data = {
    namelength: fNameValue.length + lNameValue.length,
    fValue: fNameValue,
    lValue: lNameValue,
  };
  res.render("index.ejs", data);
});

app.post("/reset", (req, res) => {
  console.log("Reset Requested");
  fNameValue = "";
  lNameValue = "";
  // const data = {
  //   namelength: fNameValue.length + lNameValue.length,
  //   fValue: fNameValue,
  //   lValue: lNameValue,
  // };
  // res.render("index.ejs", data);
  res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
