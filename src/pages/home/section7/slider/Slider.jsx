import React, { useRef } from 'react';
import styles from "./styles.module.css";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    const swiperRef = useRef(null);

    const list=[
        {
            id:1,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:2,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:3,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:4,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:5,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:6,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:7,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:8,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:9,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id:10,
            name:"Jacob",
            company:"CEO - IT Solutions Company",
            para:"Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
       
    ]

    return (
        <div className={styles.sliderContainer}>
            {/* <h2 className={styles.sectionTitle}>Locations</h2>
            <h1 className={styles.mainTitle}>Top Private Jet Destinations</h1> */}
            
            <Swiper
                ref={swiperRef}
                effect={'navigation'}
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                modules={[Navigation]}
                className={styles.mySwiper}
                navigation={{
                                nextEl: ".swiper-button-next1",
                                prevEl: ".swiper-button-prev1",
                                clickable: true,
                            }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {list.map((card) => (
                    <SwiperSlide key={card.id}>
                       <div style={{maxWidth:"fit-content",height:"100%"}} className='grid grid-cols-2 gap-[2rem]  ' key={card.id}>
                    <div className=''>
                        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/person.svg`} alt="img" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"}}/>
                    </div>
                    <div className='flex flex-col items-start gap-[1rem]'>
                        <div className='flex flex-col items-start '>
                    <p className={styles.name}>{card.name}</p>
                    <p className={styles.company}>{card.company}</p>
                    </div>
                    <p className={styles.para}>{card.para}</p>
                    </div>
                </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            <div className={styles.navigationButtons}>
                <IoArrowBackCircleOutline 
                    className={styles.navButton} 
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                />
                <IoArrowForwardCircleOutline 
                    className={styles.navButton} 
                    onClick={() => swiperRef.current.swiper.slideNext()}
                />
            </div>
        </div>
    );
}

export default Slider;