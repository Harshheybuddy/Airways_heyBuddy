import React from 'react'
import styles from "./styles.module.css"

import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom'



const Section4 = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-[2rem] lg:gap-[7rem]'>
        <div className='flex flex-col items-start gap-[5rem] justify-center'>
            <div style={{borderBottom:"1px solid white"}} className='py-[1rem]'>
                <h4 className={styles.heading}>Service, Safety & Sustainability</h4>
            </div>
            <div>
                <ul className='list-disc'>
                    <li className={styles.listtext}>We will always be there for your assistance during your travel.</li>
                    <li className={styles.listtext}>Nothing is more important to us than your safety.</li>
                    <li className={styles.listtext}>We are committed to making private aviation sustainable.</li>
                </ul>
            </div>
            <Link to="/aboutus">
            <button className={styles.btn}><span className={styles.btntext}>Get To Know More</span> <div><img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/arrow.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"contain"}}/></div></button></Link>
        </div>
        <div>
            {/* <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/cloudwindows.svg`} alt="img" style={{width:"100%", height:"100%", objectFit:"cover"}}/> */}
            <ReactPlayer url='https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Window%20video.mp4'  width="100%"
              height="100%" playing={true} 
              loop={true}     muted={true} style={{borderRadius:"20px"}} />

        </div>
    </div>
  )
}

export default Section4