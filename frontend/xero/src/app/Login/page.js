// components/LoginForm.js
"use client";

export default function LoginForm() {
  return (
    <main>
      <header>
        <h4>Login</h4>
      </header>
      <form>
        <div className="form_wrapper">
          <input id="input" type="text" required />
          <label htmlFor="input">Firstname</label>
          <i className="material-icons">person</i>
        </div>
        <div className="form_wrapper">
          <input id="password" type="password" required />
          <label htmlFor="password">Password</label>
          <i className="material-icons">lock</i>
        </div>
        <div className="remember_box">
          <div className="remember">
            <input type="checkbox" />
            Remember me
          </div>
          <a href="#">Forgot Password ?</a>
        </div>
        <button>Login</button>
        <div className="new_account">
          Don't have an account? <a href="Signup">Sign up</a>
        </div>
      </form>

      <style jsx>{`
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: sans-serif;
        }

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
