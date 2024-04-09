"use client";
import React from "react";
import styles from "./index.module.css";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Page({ params }) {
  const { Id } = route.params;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [disability, setDisability] = useState("");
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState("");
  const [emergencyContactPerson, setEmergencyContactPerson] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const addPatientandHealthProfile = async () => {
    try {
      const response = await axios.post("http://localhost:5000/patient/add", {
        firstName: firstName,
        lastName: lastName,
        userId: Id,
        mobileNumber: mobileNumber,
      });
      console.log("response==", response);
      const patientId = response.data.patient._id;

      try {
        const response = await axios.post(
          "http://localhost:5000/patient/addhealthprofile/" + patientId,
          {
            address: address,
            dob: dob,
            height: height,
            weight: weight,
            anydisabilities: disability,
            anymedicalhistory: familyMedicalHistory,
            emergencyContactPerson: emergencyContactPerson,
            age: age,
            bloodGroup: bloodGroup,
          });
          navigation.navigate('Question', { patientId: patientId });
        } catch (error) {
          console.log('error==', error);
        }
      } catch (error) {
        console.log('error==', error);
      }
    };''

  return (
    <main>
      <div className={styles.main}>
        <div>
          <div className={styles.Div}>
            <div className={styles.Div2}>
              Health Profile Setup : {Id}
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
            <div className={styles.Address}>First-Name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your First-Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Last-Name</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your Last-Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Mobile Number</div>
            <input
              type="number"
              className={styles.input}
              placeholder="Enter your number here"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Address</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Date of Birth</div>
            <input
              type="date"
              className={styles.input}
              placeholder="DD/MM/YY"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Height (in cms)</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your input here"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />{" "}
          </div>
          <div>
            <div className={styles.Address}>Weight (in kg)</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your input here"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />{" "}
          </div>
          <div>
            <div className={styles.Address}>Any Disability</div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your input here"
              value={disability}
              onChange={(e) => setDisability(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>
              Please provide any relevant family medical history.
            </div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your input here"
              value={familyMedicalHistory}
              onChange={(e) => setFamilyMedicalHistory(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Emergency contact person </div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your number here"
              value={emergencyContactPerson}
              onChange={(e) => setEmergencyContactPerson(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>Age </div>
            <input
              type="number"
              className={styles.input}
              placeholder="Enter your number here"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <div className={styles.Address}>BloodGroup </div>
            <input
              type="text"
              className={styles.input}
              placeholder="Enter your number here"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </div>
          <div className={styles.button} onClick={addPatientandHealthProfile}>
            Continue
          </div>
        </div>
      </div>
    </main>
  );
}
