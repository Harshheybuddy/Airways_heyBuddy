import React from 'react'
import styles from "./styles.module.css"


const Section2 = () => { 
  return (
    <div className={`${styles.container} `}>
       
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-[7rem] w-[100%]'>
            
            <div className='flex flex-col gap-[5rem]  items-start'>
                <h4 className={styles.heading}>Kaushambi Airways</h4>
                <p className={styles.para}>{`At Kaushambi Airways, we pride ourselves on delivering unmatched performance in every aspect of our services. From the moment you step through our doors, you are met with a commitment to excellence that permeates every facet of our operation.\n\nOur state-of-the-art facilities are meticulously maintained to provide a seamless and luxurious experience, whether you’re preparing for a flight or arriving at your destination. We leverage cutting-edge technology and industry best practices to ensure that our operations are not only efficient but also exceed the highest standards of safety and reliability.`}</p>      
                
            </div>
            <div className='w-[100%]'>
                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/airplane3.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>
        </div>
    </div>
  )
}

export default Section2