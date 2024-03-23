"use client";
import React from "react";
import styles from "./index.module.css";
import Image from 'next/image'; // Uncomment this line to import the Image component

const Profile = () => {
  return (
    <>
    <div className={styles.main}>
    <div className={styles.Div}>
    <div className={styles.Div2}>Health Profile Setup
    <div className={styles.Div3} />
    </div>
  </div>
  <div className={styles.above}>
    <div className={styles.img}>
    <Image
        src="/dummy.png"
        alt="Description of the image"
        width={50} // Width of the image
        height={50} // Height of the image
      />
    </div>
    <div className={styles.name}>
        Jay Sharma
   
    <div className={styles.age}>
        25
        </div>
    </div>
  </div>
<div className={styles.comp1}>
  <div className={styles.tittle}>
    personal 
  </div>
    Male
    92345 23456
    mali nagar, chakur.
   
</div>

    </div>
    </>
  );
};
export default Profile;
