"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function Page({ params }) {
  const patientId = params.id;

  const router = useRouter();
  const [data, setData] = useState([]);
  const [healthprofile, setHealthprofile] = useState([]);

  const profiledata = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/patient/" + patientId
      );
      setData(response.data.patient);
      console.log("healthproffile2", response.data.patient.healthprofile2[0]);
      setHealthprofile(response.data.patient.healthprofile2[0]);
      console.log("responces", response);
      6;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    profiledata();
  }, []);

  console.log("patient-====", data);

  return (
    <div className={styles.main}>
      <div
        className={styles.Div}
        style={{
          paddingLeft: "20px",
          marginTop: "20px",
        }}
      >
        <div className={styles.Div2}>
          Patient Profile
          <div className={styles.Div3} />
        </div>
      </div>
      <div
        className={styles.above}
        style={{
          paddingLeft: "20px",
        }}
      >
        <div className={styles.img}>
          <Image
            src="/dummy.png"
            alt="Description of the image"
            width={50} // Width of the image
            height={50} // Height of the image
          />
        </div>
        <div className={styles.name}>
          {data?.firstName} {data?.lastName}
          <div className={styles.no}>91 {data?.mobileNumber}</div>
        </div>
      </div>
      <div
        className={styles.comp1}
        style={{
          paddingLeft: "20px",
        }}
      >
        <div className={styles.tittle}>Personal :</div>
        <div className={styles.info}>
          Gender : Male {patientId}
          <br></br>
          Adharno: 92345 23456<br></br>
          Address: mali nagar, chakur.<br></br>
        </div>
      </div>
      <div className={styles.blackLine}></div>
      <div
        className={styles.comp1}
        style={{
          paddingLeft: "20px",
        }}
      >
        <div className={styles.tittle}>Physical :</div>
        <div className={styles.info}>
          Age : {data?.healthprofile?.age}
          <br></br>
          Weight : {data?.healthprofile?.weight} kg
          <br></br>
          Height : {data?.healthprofile?.height} cm<br></br>
          Disability : {data?.healthprofile?.anydisabilities} <br></br>
          Bloodgroup : {data?.healthprofile?.bloodGroup}
          <br></br>
        </div>
      </div>
      <div className={styles.blackLine}></div>
      <div
        className={styles.comp1}
        style={{
          paddingLeft: "20px",
        }}
      >
        <div className={styles.tittle}>Emergency Contact details:</div>
        <div className={styles.info}>
          {data?.emergencycontact?.contact1?.name}: 91{" "}
          {data?.emergencycontact?.contact1?.number}
          <br></br>
          {data?.emergencycontact?.contact2?.name}: 91{" "}
          {data?.emergencycontact?.contact2?.number}
          <br></br>
          {/* friend : 91 2345678907<br></br> */}
        </div>
      </div>
      <div className={styles.blackLine}></div>
      <div
        className={styles.comp1}
        style={{
          paddingLeft: "20px",
        }}
      >
        <div className={styles.tittle}>Medical history : </div>
        <div className={styles.info}>
          Disease : {healthprofile?.anychronicdiseases}
          <br></br>
          Allergy : {healthprofile?.anyallergies}
          <br></br>
          CurrentMedicine : {healthprofile?.anyundergoingtreatment}
          <br></br>
          Undergoing tretment : {healthprofile?.anycurrentmedications}
        </div>
      </div>
      <div
        style={{
          width: "400px",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "10px",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          backgroundColor: "#f5f5f5",
          paddingTop: "10px",
          marginTop: "30px",
        }}
      >
        <Link href={"/Dashboard/" + patientId}>
          <div>
            <Image
              src="/icon_home_active_ldpi.png"
              alt="doctor"
              width={40}
              height={40}
            />
            <p
              style={{
                fontSize: "12px",
                color: "black",
              }}
            >
              Home
            </p>
          </div>
        </Link>

        <div>
          <Image
            src="/icon_portfolio.png"
            alt="doctor"
            width={40}
            height={40}
          />
          <p
            style={{
              fontSize: "12px",
              color: "black",
            }}
          >
            chatbot
          </p>
        </div>
        <Link href={"/Profile/" + patientId}>
          <Image src="/content (1).png" alt="doctor" width={40} height={40} />
          <p
            style={{
              fontSize: "12px",
              color: "black",
            }}
          >
            Profile
          </p>
        </Link>
      </div>
    </div>
  );
}
