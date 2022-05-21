import React from "react";
import styles from './card.module.css'
const Properties = ({ detail }) => {
  return (
    <div className={styles.box1}>
      <p>{detail.date}</p>
      <button>Case Study</button>
      <h1>{detail.heading}</h1>
      <h1>{detail.subHeading}</h1>
      <p>{detail.device}</p>
    </div>
  );
};

export default Properties;
