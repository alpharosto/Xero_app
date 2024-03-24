"use client";
import React from "react";
import styles from "./index.module.css";
import Image from 'next/image'; // Uncomment this line to import the Image component

const Profile = () => {
  return (
    <>
    <div className={styles.main}>
    <div className={styles.Div}>
    <div className={styles.Div2}>
    Patient Profile
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
   
    <div className={styles.no}>
        91 8924367982
        </div>
    </div>
  </div>
<div className={styles.comp1}>
  <div className={styles.tittle}>
    Personal :
  </div>
  <div className={styles.info}>
   Gender : Male<br></br>
   Adharno:  92345 23456<br></br>
   Address: mali nagar, chakur.<br></br>
    </div>
</div>
<div className={styles.blackLine}></div>
<div className={styles.comp1}>
  <div className={styles.tittle}>
    Physical :
  </div>
  <div className={styles.info}>
   Age    : 36<br></br>
   Weight : 56kg<br></br>
   Height : 156cm<br></br>
   Disability : No<br></br>
   Bloodgroup : A+<br></br>


    </div>
</div>
<div className={styles.blackLine}></div>
<div className={styles.comp1}>
  <div className={styles.tittle}>
  Contact details:
  </div>
  <div className={styles.info}>
  aai : 91 1234567890<br></br>
  baba : 91 4567890345<br></br>
  friend : 91 2345678907<br></br>
 
    </div>
</div>
<div className={styles.blackLine}></div>
<div className={styles.comp1}>
  <div className={styles.tittle}>
  Medical history :
  </div>
  <div className={styles.info}>
  Disease :  diabetes<br></br>
  Allergy : Sneezing<br></br>
  CurrentMedicine : Metformin<br></br>
  Undergoing tretment : Till now only for sugar
    </div>
</div>

    </div>
    </>
  );
};
export default Profile;
