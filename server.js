const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const Person = require("./models/Person");
const PORT=process.env.PORT ||3000;

app.get("/", function (req, res) {
  res.send("This Is Testing Api");
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    res.status(200).json(data);
  } catch (err) {
    console.log("Error Saving Person", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get('/person' , async(req, res)  => {

try{
const data= await Person.find();
res.status(200).json(data);

}catch(err){
  console.log("Error Saving Person", err);
  res.status(500).json({ error: "Internal Server Error" });

}

})




app.listen(PORT);
