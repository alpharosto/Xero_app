const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Your routes go here

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

mongoose
  .connect(
    "mongodb+srv://gauravkamble:yvLfKLGf5YymifxT@dhanwantri.0qhmusz.mongodb.net/?retryWrites=true&w=majority&appName=Dhanwantri"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
      console.log("Database is connected");
      console.log("http://localhost:" + 5000);
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });
