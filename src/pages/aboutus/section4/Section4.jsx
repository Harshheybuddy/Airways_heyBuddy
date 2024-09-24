import React from 'react';
import styles from "./styles.module.css";


const Section4 = () => {
  const list = [
    {
      id: 1,
      title: "Convenience",
      para: "The highly lucrative relationship you'll enjoy with Craft is defined by the intelligent, practical simplicity of our operation."
    },
    {
      id: 2,
      title: "Flexibility",
      para: "Advantageous and commercially astute, our unique operational flexibility generates the highest of returns on your behalf."
    },
    {
      id: 3,
      title: "Reliability",
      para: "Invest in the best for operational reliability & unmatched reputation of service and performance."
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h4 className={styles.heading}>Unrivaled operation for aircraft owners</h4>
          <p className={styles.para}>
            The ultimate partnership. Kaushambi Airways's innovative business models of high utilization & operational efficiencies optimize your return on investment.
          </p>
          <div className={styles.cardGrid}>
            {list.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/tick.svg`} alt="tick" className={styles.icon} />
                </div>
                <p className={styles.cardheading}>{item.title}</p>
                <p className={styles.cardpara}>{item.para}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/airplane5.svg`} alt="Airplane" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Section4;