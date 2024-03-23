"use client";
import React from 'react';
import styles from "./index.module.css";
import styled from 'styled-components';

const Main = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 4rem;
  width: 500px;
  padding: 20px;
  border-radius: 0px;
  border: 2px solid black; /* Set border color to black */
  background-color: white; /* Set background color to white */
  backdrop-filter: blur(25px);
  position: relative;
`;

const Above = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  stroke-width: 1px;
  stroke: #000;
  overflow: hidden;
  /* border-color: rgba(0, 0, 0, 1); */
  /* border-style: solid; */
  border-width: 1px;
  position: relative;
  display: flex;
  min-height: 79px;
  width: 100%;
  align-items: start;
  font-size: 18px;
  background-color: aqua;
  color: black; /* Set text color to black */
  font-weight: 700;
  max-width: 476px;
  padding: 13px 80px 34px 22px;
`;

const Health = styled.div`
  position: relative;
  color: black; /* Set text color to black */
  margin-top: 8px;
  width: 176px;
  height: 6px;
`;

const First = styled.div`
 font-weight: 600;
 margin-top: 10px;
 font-size: 0.7rem;
  color: black; /* Set text color to black */
`;

const Input = styled.textarea`
  font-family: Inter, sans-serif;
  text-decoration-line: underline;
  border-radius: 10px;
  background-color: #DCDCDC;
  /* border-color: black; Set border color to black */
  border-style: solid;
  border-width: 1px;
  margin-top: 10px;
  width: 27rem;
  align-items: start;
  justify-content: center;
  color: black;
  padding: 10px 10px;
`;

const Continue = styled.div`
  font-family: Inter, sans-serif;
  text-decoration-line: underline;
  border-radius: 40px;
  background-color: #005cb9;
  margin-top: 61px;
  align-items: center;
  color: #fff;
  font-weight: 700;
  white-space: nowrap;
  justify-content: center;
  padding: 16px 60px;
`;

const Question = () => {
  return (
    <Main>
        <div className={styles.Div}>
    
    <div className={styles.Div2}>Health Profile Setup
    <div className={styles.Div3} />
    </div>
  </div>
      <div className={styles.block}>
        <First>
          Do you have any chronic medical conditions? If yes, please specify
        </First>
        <Input
          type="text"
          className={styles.input}
          rows={4}
          placeholder="Enter your address"
        />
      </div>
      <div className={styles.block}>
        <First>
          Have you been diagnosed with any serious medical conditions for which you are undergoing treatment? If yes, please specify
        </First>
        <Input
          type="text"
          className={styles.input}
          rows={4}
          placeholder="Enter your input"
        />
      </div>
      <div className={styles.block}>
        <First>
          Are you currently experiencing any symptoms of illness such as cough, fever, or fatigue? If yes, please specify.
        </First>
        <Input
          type="text"
          className={styles.input}
          rows={4}
          placeholder="Enter your address"
        />
      </div>
      <div className={styles.block}>
        <First>
          Are you currently taking any medications, vitamins, or supplements on a regular basis? If yes, please provide details.
        </First>
        <Input
          type="text"
          className={styles.input}
          rows={4}
          placeholder="Enter your address"
        />
      </div>
      <div className={styles.block}>
        <First>
          Are there any specific areas of your health that you would like to focus on during your checkup or consultation?
        </First>
        <Input
          type="text"
          className={styles.input}
          rows={4}
          placeholder="Enter your address"
        />
      </div>
      <Continue>Continue</Continue>
    </Main>
  );
};

export default Question;
