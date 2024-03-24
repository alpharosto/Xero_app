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

return (
    <>
      <main>
        <div className={styles.main}>
          <div>
            <div className={styles.Div}>
              <div className={styles.Div2}>
                Health Profile Setup
                <div className={styles.Div3} />
              </div>
            </div>
            <div className={styles.interest}>
              We're interested in learning more about you. Please provide the
              following details.
            </div>
            <div className={styles.line}></div>
            <div className="line"></div>

            <div>
              <div className={styles.Address}>Address</div>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your address"
              />
            </div>
            <div>
              <div className={styles.Address}>Date of Birth</div>
              <input
                type="text"
                className={styles.input}
                placeholder="DD/MM/YY"
              />{" "}
            </div>
            <div>
              <div className={styles.Address}>Height </div>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your input here"
              />{" "}
            </div>
            <div>
              <div className={styles.Address}>Weight</div>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your input here"
              />{" "}
            </div>
            <div>
              <div className={styles.Address}>Any Disability</div>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your input here"
              />
            </div>
            <div>
              <div className={styles.Address}>
                Please provide any relevant family medical history.{" "}
              </div>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your input here"
              />
            </div>
            <div>
              <div className={styles.Address}>Emergency contact person </div>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter your number here"
              />
            </div>
            <div className={styles.button}>Continue</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HealthProfile;
