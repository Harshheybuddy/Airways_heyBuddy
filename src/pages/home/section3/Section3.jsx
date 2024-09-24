import React from 'react'
import styles from "./styles.module.css"
import Slider from './slider/Slider'

const Section3 = () => {
    return (
        <div id="ourFleet" className='flex flex-col  gap-[7rem]'>
            <div className='flex flex-col items-center gap-[1rem]'>
                <h4 className={styles.heading1}>Our Services</h4>
                <h1 className={styles.heading2}>Explore our Aircraft</h1>
            </div>
            <div>
                <Slider/>
            </div>
        </div>
      )
}

export default Section3