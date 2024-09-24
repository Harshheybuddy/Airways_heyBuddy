import React from 'react'
import styles from "./styles.module.css"

const Section3 = () => { 
  return (
    <div className={`${styles.container} `}>
       
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[7rem] w-[100%]'>
        <div className='w-[100%]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/airplane4.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
            <div className='flex flex-col gap-[5rem]  items-start'>
              <div className='flex flex-col gap-[1rem] items-start'>
              <p className={styles.heading1}>Our DNA</p>
                <h4 className={styles.heading}>Safety first, always</h4>
                </div>
                <p className={styles.para}>{`Our team of professionals embodies the core values of dedication, precision, and exceptional customer service. Each member is rigorously trained and continually updated on the latest advancements in aviation to provide a level of service that is second to none.\n\nThis dedication to ongoing professional development ensures that our staff can anticipate and meet the unique needs of every client, offering personalized solutions and support that enhance the overall travel experience. Whether it’s our concierge service, ground support, or in-flight amenities, our team’s performance is consistently superior, ensuring that every interaction with Kaushmabi Airways is marked by excellence.\n\nSafe - every day, everywhere, every flight.`}</p>      
                
            </div>
           
        </div>
    </div>
  )
}

export default Section3