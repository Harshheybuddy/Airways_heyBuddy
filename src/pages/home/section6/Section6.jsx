import React from 'react'
import styles from "./styles.module.css"


const Section6 = () => { 
  return (
    <div className={`${styles.container} flex flex-col items-center gap-[7rem]`}>
        <div className='flex flex-col items-center gap-[1rem]'>
            <h4 className={styles.heading1}>Our Clients</h4>
            <h1 className={styles.heading2}>People Who Trust Us</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-[80%]'>
            <div className='flex flex-col gap-[2rem]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/bjp1.svg`} alt="img" style={{width:"100%",height:"auto",objectFit:"cover"}}/>
                <p className={styles.intro}>Bharatiya Janata Party</p>
            </div>
            <div className='flex flex-col gap-[2rem]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/bjp2.svg`} alt="img" style={{width:"100%",height:"auto",objectFit:"cover"}}/>
                <div className='flex flex-col'>
                <p className={styles.intro}>Bharatiya Janata Party</p> <p className={styles.intro}>(Uttar Pradesh)</p></div>
            </div>
           
        </div>
    </div>
  )
}

export default Section6