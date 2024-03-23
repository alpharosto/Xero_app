"use client";
import React from "react";
import styles from "./index.module.css";
import Image from 'next/image'; 


const Doctordashboard = () => {
  return (
    <div className={styles.main}>
    <div className={styles.above}>
      <div className={styles.app}>
        # Dhanwantrii
      </div>
      <div className={styles.paitent}>
      <div className={styles.img}>
    <Image
        src="/dummy.png"
        alt="Description of the image"
        width={50} // Width of the image
        height={50} // Height of the image
      />
    </div>
       <div className={styles.name}>
        Jaya Sharma<br></br>
        919632587410<br></br>
        </div>
      </div>
    </div>


<div className={styles.component}>
<div className={styles.middle}>
<div className={styles.sos}>

<Image
        src="/sos.png"
        alt="Description of the image"
        width={70} 
        height={70}
      />
</div>
<div className={styles.remid}>
   #  Reminder
</div>
<div className={styles.Health}>
   #  Health update
</div>
</div>

<div className={styles.notify}>
    <br>
    </br>
    Notification:
    <br>
    </br>
    take medicine till
    11:00 am
</div>

<div className={styles.Reminder}>
  Reminder
</div>
</div>

    </div>
  );
};
export default Doctordashboard;
