"use client";
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Page({ params }) {
  const patientId = params.id;

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

  const sos = async () => {
    try {
      const response = await axios.post(
        "https://4687-115-247-30-146.ngrok-free.app/api/send_message",
        {
          to_numbers: ["+919352894822", "+917709551702"],
          message_body: "Emergency!",
        }
      );

      console.log("responce", response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.above}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20px",
          }}
        >
          <p
            style={{
              fontSize: "30px",
              color: "white",
            }}
          >
            Hi , {data?.firstName} !
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "white",
              textAlign: "center",
            }}
          >
            Welecome to our app
          </p>
        </div>
      </div>
      <div className={styles.card1}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "20px",
            paddingTop: "10px",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              color: "White",
            }}
          >
            Current Your Health Status :
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "20px",
              gap: "6px",
              paddingTop: "10px",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "Black",
              }}
            >
              Height : 156 (in className)
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "Black",
              }}
            >
              Weight : 56 (in kg)
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "Black",
              }}
            >
              BMI : 18 (fit)
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "Black",
              }}
            >
              Blood Pressure : 120/80
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "Black",
              }}
            >
              Heart Rate : 72
            </p>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <div className={styles.button_1}>Update Medical History</div>
          <div>
            <Image
              src="/sos.png"
              alt="doctor"
              width={100}
              height={60}
              onClick={() => {
                sos();
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div className={styles.button_2}>Add Medication Alert</div>
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
        }}
      >
        <Link href={"/Dashboard/" + patientId}>
          <div>
            <Image src="/content.png" alt="doctor" width={40} height={40} />
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
            Profile
          </p>
        </Link>
      </div>
    </div>
  );
}
