import React from 'react'
import styles from "./styles.module.css"
import Slider from './slider/Slider'

const Section7 = () => {
    return (
        <div className='flex flex-col  gap-[7rem]'>
            <div className='flex flex-col items-center gap-[1rem]'>
                <h4 className={styles.heading1}>Testimonials</h4>
                <h1 className={styles.heading2}>Voices of Trust</h1>
            </div>
            <div>
                <Slider/>
            </div>
        </div>
      )
}

export default Section7