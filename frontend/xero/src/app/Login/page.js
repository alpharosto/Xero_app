// components/LoginForm.js
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  // const sms = async () => {
  //   // const fromdata = new FormData();

  //   // fromdata.append("from", "Vonage APIs");
  //   // fromdata.append("text", "A text message sent using the Vonage SMS API");
  //   // fromdata.append("to", 917709551702);
  //   // fromdata.append("api_key", "5f08d448");
  //   // fromdata.append("api_secret", "cOEXGJkYWF5PZWZq");

  //   try {
  //     const resp = await axios.post("http://localhost:3001/send-sms", {
  //       recipient: [917709551702],
  //       message: "hi i am gaurav",
  //     });
  //     console.log("resp", resp);

  //     // const resp1 = await axios.post("http://localhost:3001/sendsms2", {
  //     //   recipient: [919284637275],
  //     //   message: "hi i am Sayali",
  //     // });
  //     // console.log("resp1===", resp1);

  //     // const resp2 = await axios.post("http://localhost:3001/send-sms", {
  //     //   recipient: [917709551702],
  //     //   message: "hi i am gaurav",
  //     // });
  //     // console.log(resp2);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const login = async () => {
    console.log("name==", username);
    console.log("password==", password);
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email: username,
        password: password,
      });
      const id = response.data.user._id;
      // router.push({
      //   pathname: "/HealthProfile",
      //   query: { data: id },
      // });
      console.log("response==", id);
      router.push("/HealthProfile/" + id);
    } catch (error) {
      console.log("error==", error);
    }
  };

  return (
    <main>
      <header>
        <h4>Login</h4>
      </header>
      <form>
        <div className="form_wrapper">
          <input
            id="input"
            type="text"
            required
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="input">E-mail</label>
          {/* <i className="material-icons">lock</i> */}
        </div>
        <div className="form_wrapper">
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          {/* <i className="material-icons">lock</i> */}
        </div>
        <div className="remember_box">
          <div className="remember">
            <input type="checkbox" />
            Remember me
          </div>
          <a href="#">Forgot Password ?</a>
        </div>
        <div onClick={login} className={styles.button}>
          Login
        </div>
        <div className="new_account">
          Don't have an account? <a href="Signup">Sign up</a>
        </div>
      </form>

      <style jsx>{`

        body {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: url(bg.svg) no-repeat center center/cover;
        }

        main {
          margin-left: auto;
          margin-right: auto;
          margin-top: 8rem;
          width: 300px;
          padding: 20px;
          border-radius: 10px;
          border: 2px solid black; /* Changed border color */
          background-color: white; /* Changed background color */
          backdrop-filter: blur(25px);
          position: relative;
        }

        main header {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 20px;
          background-color: black; Changed header background color
          border-radius: 0 0 10px 10px;
          color: white; /* Changed header text color */
        }

        form {
          margin-top: 80px; /* Adjust as needed */
          display: flex;
          flex-direction: column;
          gap: 20px;
          /* width: 100%; */
        }

        input[type="text"],
        input[type="password"] {
          padding: 10px;
          border: 2px solid black; /* Changed border color */
          width: 100%;
          border-radius: 10px;
          outline: none;
          background-color: white; /* Changed input background color */
          color: black; /* Changed text color */
        }

        .form_wrapper {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
        }

        label {
          position: absolute;
          left: 10px;
          font-size: 12px;
          color: black; /* Changed label text color */
          transition: 0.2s;
        }

        i {
          position: absolute;
          right: 10px;
          color: black; /* Changed icon color */
          font-size: 15px !important;
        }

        .remember_box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          /* width: 100%; */
        }

        .remember {
          display: flex;
          align-items: center;
          gap: 5px;
          color: black; /* Changed remember text color */
        }

        a {
          color: black; /* Changed link color */
        }

        button {
          border: none;
          padding: 10px;
          background-color: #005cb9;
          border-radius: 25px;
          cursor: pointer;
          /* width: 100%; */
        }

        input:valid + label,
        input:focus + label {
          background-color: black; /* Changed label background color */
          color: white;
          transform: translate(10px, -20px);
          padding: 2px 5px;
          font-size: 8px;
          border-radius: 4px;
        }

        .new_account {
          text-align: center;
          color: #005c09;
        }

        header::before {
          position: absolute;
          content: "";
          top: 0;
          left: -30px;
          width: 30px;
          height: 30px;
          background-color: transparent;
          box-shadow: 15px 0 0 0 black; /* Changed header box-shadow color */
          border-top-right-radius: 50%;
        }

        header::after {
          position: absolute;
          content: "";
          top: 0;
          right: -30px;
          width: 30px;
          height: 30px;
          background-color: transparent;
          box-shadow: -15px 0 0 0 black; /* Changed header box-shadow color */
          border-top-left-radius: 50%;
        }
        .new_account a {
  color: #005cb9; /* Changed link color to #005cb9 */
}
        /* @media screen and (max-width: 768px) {
          main {
            width: 80%; 
          }
        } */
      `}</style>
    </main>
  );
}
