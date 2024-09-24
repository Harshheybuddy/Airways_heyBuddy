import React from 'react';
import styles from "./styles.module.css";


const Section1 = () => {
  return (
    <div className={`${styles.container} relative flex flex-col gap-[3rem] items-center`}>
      <div className='flex flex-col gap-[0rem] items-center'>
        <h1 className={styles.heading}>About Kaushambi Airways</h1>
        <p className={styles.para}>
          Combining Swiss quality and worldwide expertise, we endeavor to
          elevate private flying to new heights.
        </p>
      </div>
      
      <div className={styles.imageWrapper}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/airplane2.svg`} alt="Airplane" className={styles.image} />
      </div>
    </div>
  );
};

export default Section1;