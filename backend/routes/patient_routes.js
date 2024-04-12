const express = require("express");
const router = express.Router();
const {
  getallPatient,
  getPatientById,
  addPatient,
  addHealthProfile,
  addEmergencyContact,
  addHealthProfile2,
  getPatientbyuserId,
} = require("../controllers/patient_controllers");

router.get("/", getallPatient);
router.get("/:pid", getPatientById);
router.get("/:pid",getPatientbyuserId)

router.post("/add", addPatient);

// addhealthprofile1
router.post("/addhealthprofile/:pid", addHealthProfile);
router.post("/addemergencycontact/:pid", addEmergencyContact);
router.post("/addhealthprofile2/:pid", addHealthProfile2);

module.exports = router;
