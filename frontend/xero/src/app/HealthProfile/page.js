"use client";
import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HealthProfile = () => {
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [disability, setDisability] = useState("");
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState("");
  const [emergencyContactPerson, setEmergencyContactPerson] = useState("");

  const submit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        address: address,
        dob: dob,
        height: height,
        weight: weight,
        disability: disability,
        familyMedicalHistory: familyMedicalHistory,
        emergencyContactPerson: emergencyContactPerson,
      });
      console.log("response==", response);
    } catch (error) {
      console.log("error==", error);
    }
  };

  HealthProfile
};

export default HealthProfile;
