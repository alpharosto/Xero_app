const express = require("express");
const Patient = require("../model/patient");

// get all patients
const getallPatient = async (req, res, next) => {
  let patients;
  try {
    patients = await Patient.find({});
  } catch (err) {
    return next(
      new HttpError("Fetching users failed, please try again later.", 500)
    );
  }
  return res.status(200).json({ patients });
};

// get patient by id
const getPatientById = async (req, res, next) => {
  const patientId = req.params.pid;
  let patient;
  try {
    patient = await Patient.findById(patientId);
  } catch (err) {
    return next(
      // new HttpError("Fetching user failed, please try again later.", 500)
       res.status(500).json("Fetching user failed, please try again later.")
    );
  }
  if (!patient) {
    return next(
      new HttpError("Could not find a user for the provided id.", 404)
    );
  }
  res.json({ patient: patient.toObject({ getters: true }) });
};

// get patient by userId
const getPatientbyuserId = async (req, res, next) => {
  const patientId = req.params.pid;
  let patient;
  try {
    patient = await Patient.find((item)=> {
       item.userId == patientId
    });
  } catch (err) {
    return res.status(500).json("Fetching user failed, please try again later.");
  }
  if (!patient) {
    return next(
      new HttpError("Could not find a user for the provided id.", 404)
    );
  }
  res.json({ patient: patient.toObject({ getters: true }) });
};


// add patient
const addPatient = async (req, res, next) => {
  const { firstName, lastName, userId, mobileNumber } = req.body;
  console.log(firstName);
  console.log(userId);
  console.log(mobileNumber);
  try {
    console.log("create");
    const user = await Patient.create({
     firstName,
    userId,
    mobileNumber,
    });
    await user.save();
    res.status(201).json({ patient: user });
  } catch (err) {
    // return next(new HttpError("Creating user failed, please try again.", 500));
    return res.status(500).json("Creating user failed, please try again.")
  }
  // res.status(201).json({ patient: createdPatient });
};

// add healthprofile
const addHealthProfile = async (req, res, next) => {
  const {
    age,
    height,
    weight,
    anydisabilities,
    bloodGroup,
    anymedicalhistory,
  } = req.body;
  const patientId = req.params.pid;
  let patient;
  try {
    patient = await Patient.findById(patientId);
  } catch (err) {
    return next(
      new HttpError("Fetching user failed, please try again later.", 500)
    );
  }

  console.log("patient", patient)
  patient.healthprofile = {
    age,
    height,
    weight,
    anydisabilities,
    bloodGroup,
    anymedicalhistory,
  };
  try {
    await patient.save();
  } catch (err) {
    return next(
      new HttpError("Creating health profile failed, please try again.", 500)
    );
  }

  res.status(201).json({ patient: patient });
};

// add emergency contact

const addEmergencyContact = async (req, res, next) => {
  const { contact1, contact2 } = req.body;
  const patientId = req.params.pid;
  let patient;
  try {
    patient = await Patient.findById(patientId);
  } catch (err) {
    return next(
      new HttpError("Fetching user failed, please try again later.", 500)
    );
  }
  patient.emergencycontact = {
    contact1,
    contact2,
  };
  try {
    await patient.save();
  } catch (err) {
    return next(
      new HttpError("Creating emergency contact failed, please try again.", 500)
    );
  }
  res.status(201).json({ patient: patient });
};

// add healthprofile2

const addHealthProfile2 = async (req, res, next) => {
  const {
    anychronicdiseases,
    anyallergies,
    anyundergoingtreatment,
    anycurrentmedications,
  } = req.body;

  const patientId = req.params.pid;
  let patient;
  try {
    patient = await Patient.findById(patientId);
  } catch (err) {
    return next(
      new HttpError("Fetching user failed, please try again later.", 500)
    );
  }
  patient.healthprofile2 = {
    anychronicdiseases,
    anyallergies,
    anyundergoingtreatment,
    anycurrentmedications,
  };

  try {
    await patient.save();
  } catch (err) {
    return next(
      new HttpError("Creating health profile failed, please try again.", 500)
    );
  }

  res.status(201).json({ patient: patient });
};

exports.getallPatient = getallPatient;
exports.getPatientById = getPatientById;
exports.addPatient = addPatient;
exports.addHealthProfile = addHealthProfile;
exports.addEmergencyContact = addEmergencyContact;
exports.addHealthProfile2 = addHealthProfile2;
exports.getPatientbyuserId =getPatientbyuserId;
