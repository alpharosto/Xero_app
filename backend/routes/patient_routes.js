const express = require("express");
const router = express.Router();
const {
  getallPatient,
  getPatientById,
  addPatient,
  addHealthProfile,
  addEmergencyContact,
  addHealthProfile2,
} = require("../controllers/patient_controllers");

router.get("/", getallPatient);
router.get("/:pid", getPatientById);
router.post("/add", addPatient);
router.post("/addhealthprofile/:pid", addHealthProfile);
router.post("/addemergencycontact/:pid", addEmergencyContact);
router.post("/addhealthprofile2/:pid", addHealthProfile2);

module.exports = router;
