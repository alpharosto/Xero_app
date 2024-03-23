"use client";
import React from "react";
import styles from "./index.module.css";

const HealthProfile = () => {
  return (
    <>
      <main>
        <div className={styles.main}>
          <div>
            
             <div className={styles.Div}>
    
      <div className={styles.Div2}>Health Profile Setup
      <div className={styles.Div3} />
      </div>
    </div>
    <div className={styles.interest}>
    We're interested in learning more about you. Please provide the following
      details.

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
            <div className={styles.continue}>Continue</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HealthProfile;
