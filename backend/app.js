const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user_routes");
const patientRoutes = require("./routes/patient_routes");
const app = express();
const cors = require("cors");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Your routes go here

// app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//import routes
app.use("/user", userRoutes);
app.use("/patient", patientRoutes);

mongoose
  .connect(
    "mongodb+srv://gauravkamble704:trfTqqoSgIzmJsG5@cluster0.dcpe2fg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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
