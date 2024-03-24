const mongoose = require("mongoose");

const healthprofile2 = new mongoose.Schema({
  anychronicdiseases: {
    type: String,
    required: [false, "Please enter any chronic diseases"],
  },
  anyallergies: {
    type: String,
    required: [false, "Please enter any allergies"],
  },
  anyundergoingtreatment: {
    type: String,
    required: [false, "Please enter any treatment"],
  },
  anycurrentmedications: {
    type: String,
    required: [false, "Please enter any current medications"],
  },
});

const patientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter a first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please enter a last name"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "Please enter a userId"],
    unique: true,
  },
  userName: {
    type: String,
    required: [false, "Please enter a username"],
  },
  mobileNumber: {
    type: String,
    required: [true, "Please enter a mobile number"],
  },
  emergencycontact: {
    contact1: {
      name: {
        type: String,
        required: [false, "Please enter an emergency contact"],
      },
      number: {
        type: String,
        required: [false, "Please enter an emergency contact"],
      },
      relation_to_patient: {
        type: String,
        required: [false, "Please enter an emergency contact"],
      },
    },
    contact2: {
      name: {
        type: String,
        required: [false, "Please enter an emergency contact"],
      },
      number: {
        type: String,
        required: [false, "Please enter an emergency contact"],
      },
      relation_to_patient: {
        type: String,
        required: [false, "Please enter an emergency contact"],
      },
    },
  },
  address: {
    type: String,
    required: [false, "Please enter an address"],
  },
  dob: {
    type: Date,
    required: [false, "Please enter a date of birth"],
  },
  healthprofile: {
    age: {
      type: String,
      required: [false, "Please enter an age"],
    },
    height: {
      type: String,
      required: [false, "Please enter a height"],
    },
    weight: {
      type: String,
      required: [false, "Please enter a weight"],
    },
    anydisabilities: {
      type: String,
      required: [false, "Please enter any disabilities"],
    },
    bloodGroup: {
      type: String,
      required: [false, "Please enter a blood group"],
    },
    anymedicalhistory: {
      type: String,
      required: [false, "Please enter any medical history"],
    },
    familymedicalhistory: {
      type: String,
      required: [false, "Please enter any family medical history"],
    },
  },
  healthprofile2: [healthprofile2],
});

module.exports = mongoose.model("Patient", patientSchema);
