import React, { useState } from 'react'
import styles from "./styles.module.css"

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
    const list = [
        {
            id: 1,
            title: "Helicopters",
            models: [{
                id:1,
                name:"Agusta 109",
                about:"The AW109 Trekker is the latest multi-role light twin-engine helicopter.",
                image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Helicopters/agusta%20109.svg"}, 
                {
                    id:2,
                    name:"Agusta 139",
                    about:"The AW139 is ideally suited to the offshore role.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Helicopters/agusta%20139.svg"},
                 {
                    id:3,
                    name:"Bell 407",
                    about:"The Bell 407 is a single-engine, four-bladed, civil utility helicopter.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Helicopters/bell%20407.svg"},
                 {
                    id:4,
                    name:"Bell 429",
                    about:"The Bell 429 GlobalRanger is a light, twin-engine helicopter.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Helicopters/bell%20429.svg"},
                 {
                    id:5,
                    name:"Eurocopter EC135",
                    about:"The Eurocopter EC135 is a twin-engine civil helicopter.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Helicopters/EUROCOPTER%20(EC-135).svg"}],
           
        },
        {
            id: 2,
            title: "Mid-Size Jet",
            models: [{
                id:1,
                name:"Citation III",
                    about:"Citation III is a low-priced business jet that delivers comfortable travel.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/CITATION%20III.svg"},
                 {id:2,name:"Citation XLS",
                    about:"Citation XLS is a turbofan-powered, medium-sized business jet.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/CITATION%20xls.svg"},
                  {id:3,name:"Hawker 900XP",
                    about:"The Hawker 900XP is a well-known business jet ideal for mid-range destinations.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/Hawker%20900XP.svg"},
                  {id:4,name:"Learjet 40XR",
                    about:"The Learjet 40XR is ordinarily configured for six passengers.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/LEARJET%2045%20XR.svg"},{
                        id:1,
                        name:"Citation III",
                            about:"Citation III is a low-priced business jet that delivers comfortable travel.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/CITATION%20III.svg"},
                         {id:2,name:"Citation XLS",
                            about:"Citation XLS is a turbofan-powered, medium-sized business jet.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/CITATION%20xls.svg"},
                          {id:3,name:"Hawker 900XP",
                            about:"The Hawker 900XP is a well-known business jet ideal for mid-range destinations.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/Hawker%20900XP.svg"},
                          {id:4,name:"Learjet 40XR",
                            about:"The Learjet 40XR is ordinarily configured for six passengers.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/mid-sizeJets/LEARJET%2045%20XR.svg"}],
           
        },
        {
            id: 3,
            title: "Large Jets",
            models: [{id:1,name:"Challenger 604",
                about:"Challenger 604 is well suited for any mission.",
                image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/largeJets/CHALLENGER%20604.svg"}, 
                {id:2,name:"Challenger 850",
                    about:"Built for maximum comfort and speed.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/largeJets/CHALLENGER%20850.svg"},{id:1,name:"Challenger 604",
                        about:"Challenger 604 is well suited for any mission.",
                        image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/largeJets/CHALLENGER%20604.svg"}, 
                        {id:2,name:"Challenger 850",
                            about:"Built for maximum comfort and speed.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/largeJets/CHALLENGER%20850.svg"},{id:1,name:"Challenger 604",
                                about:"Challenger 604 is well suited for any mission.",
                                image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/largeJets/CHALLENGER%20604.svg"}, 
                                {id:2,name:"Challenger 850",
                                    about:"Built for maximum comfort and speed.",
                                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/largeJets/CHALLENGER%20850.svg"}],
          
        },
        {
            id: 4,
            title: "Turbo Props",
            models: [{id:1,name:"King Air B200 GT250",
                about:"VIP Seating Configuration for 7 People.",
                image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/TurboProps/king%20air%20b200%20GT.svg"},
                {id:2,name:"King Air B200",
                    about:"The King Air B200 is a pressurized, twin-engine turboprop aircraft.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/TurboProps/king%20air%20b200.svg"},
                {id:3,name:"Pilatus PC-12",
                    about:"The Pilatus PC-12 is a pressurized, single-engined, turboprop aircraft.",
                    image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/TurboProps/PILATUS%20PC-12.svg"},
                    {id:1,name:"King Air B200 GT250",
                        about:"VIP Seating Configuration for 7 People.",
                        image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/TurboProps/king%20air%20b200%20GT.svg"},
                        {id:2,name:"King Air B200",
                            about:"The King Air B200 is a pressurized, twin-engine turboprop aircraft.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/TurboProps/king%20air%20b200.svg"},
                        {id:3,name:"Pilatus PC-12",
                            about:"The Pilatus PC-12 is a pressurized, single-engined, turboprop aircraft.",
                            image:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/TurboProps/PILATUS%20PC-12.svg"}],
            
        },
    ]
    const [open, setIsOpen] = useState(-1);
    const handleOpen = (index) => {
        if (index === open) setIsOpen(-1);
        else setIsOpen(index)
    }

    const handleSlideChange = (swiper) => {
        const slides = swiper.slides;
      
        slides.forEach((slide, index) => {
        //   const id = index.toString(); // Convert index to string to match the div id
        //   const intro = document.getElementById(id); // Select the description div
      
        //   if (intro) {
            if (index === swiper.activeIndex) {
              // Active slide: show the description div
              slide.style.opacity = "1"; // Active slide
            //   intro.style.display = "flex"; // Show description div
            } else {
              // Inactive slide: hide the description div
              slide.style.opacity = "0.2"; // Inactive slides
            //   intro.style.display = "none"; // Hide description div
            // }
          }
        });
      };

    return (
        <div  className={styles.sliderContainer}>
            {
                list.map((item, index) => {
                    return <div key={item.id} className={styles.list}>
                        <div className={styles.listHeader} onClick={() => handleOpen(index)}>
                            <p className={styles.listserialno}>{(index + 1).toString().padStart(2, '0')}</p>
                            <h4 className={styles.listheading}>
                                {item.title}
                            </h4>
                        </div>
                        {open === index && <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={3}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: -350,
                                depth: 700,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            loop={true}
                            modules={[EffectCoverflow, Navigation,]}
                            className={styles.mySwiper}
                            navigation={{
                                nextEl: ".swiper-button-next1",
                                prevEl: ".swiper-button-prev1",
                                clickable: true,
                            }}
                            onSlideChange={handleSlideChange}
                        >
                            {
                                item.models.map((model, imageIndex) => {
                                    return <SwiperSlide key={imageIndex}>
                                        <div className={styles.slideContent}>
                                            <div className={styles.imageWrapper}>
                                                <img src={model.image} alt={`${item.title} ${imageIndex + 1}`} className={styles.slideImage} />
                                            </div>
                                            <div className={styles.slideText}>
                                                <h4 className={styles.sliderhead}>{model.name}</h4>
                                                <p className={styles.sliderpara}>{model.about}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                })
                            }
                            <div className={styles.navigationWrapper}>
                                <IoArrowBackCircleOutline color="#808080" size={35} className='swiper-button-prev1' />
                                <IoArrowForwardCircleOutline color="#808080" size={35} className='swiper-button-next1' />
                            </div>
                        </Swiper>}
                    </div>
                })
            }
        </div>
    )
}

export default Slider