import React from 'react'
import styles from "./styles.module.css"

import Searchbar from '../searchbar/Searchbar'

const Section1 = () => {
  return (
    <div className={`${styles.container} relative flex flex-col gap-[3rem] items-center`}>
      <div className='flex flex-col gap-[0rem] items-center'>
        <h1 className={styles.heading}>Charter Your Private Jet Today</h1>
        <p className={styles.para}>Revolutionary and Sustainable Private Jet Charter: Pioneering Excellence in Aviation</p>
      </div>
      
      <div className={styles.imageWrapper}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/airplane1.svg`} alt="img" className={styles.mainImage}/>
        <div className={styles.shadowImageWrapper}>
          <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/airplane1s.svg`} alt="img" className={styles.shadowImage}/>
        </div>
      </div>
      
      <div className={styles.searchbarWrapper}>
        <Searchbar/>
      </div>
    </div>
  )
}

export default Section1