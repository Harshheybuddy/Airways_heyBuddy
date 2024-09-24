import React, { useRef } from 'react';
import styles from "./styles.module.css";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Slider = () => {
    const swiperRef = useRef(null);

    const list = [
        {
            id: 1,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Ahmedabad.svg`,
            title: "Ahmedabad",
            desc: "Discover the Private Jet Destination to Dubai"
        },
        {
            id: 2,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Badrinath.svg`,
            title: `Badrinath`,
            desc: "Discover the Private Jet Destination to Maldives"
        },
        {
            id: 3,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Bangalore.svg`,
            title: "Bangalore",
            desc: "Discover the Private Jet Destination to Vietnam"
        },
        {
            id: 4,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Chennai.svg`,
            title: "Chennai",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 5,
        
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/delhi.svg`,
            title: "Delhi",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 6,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Gangotri.svg`,
            title: "Gangotri",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 7,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Hyderabad.svg`,
            title: "Hyderabad",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 8,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/kedarnath.svg`,
            title: "Kedarnath",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 9,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/kolkata.svg`,
            title: "Kolkata",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 10,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Mumbai.svg`,
            title: "Mumbai",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 11,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Pune.svg`,
            title: "Pune",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 12,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Surat.svg`,
            title: "Surat",
            desc: "Discover the Private Jet Destination to London"
        },
        {
            id: 13,
            image: `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/Locations/Yamunotri.svg`,
            title: "Yamunotri",
            desc: "Discover the Private Jet Destination to London"
        },
    ];

    return (
        <div className={styles.sliderContainer}>
            {/* <h2 className={styles.sectionTitle}>Locations</h2>
            <h1 className={styles.mainTitle}>Top Private Jet Destinations</h1> */}
            
            <Swiper
                ref={swiperRef}
                effect={'navigation'}
                slidesPerView={1}
                spaceBetween={20}
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
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {list.map((card) => (
                    <SwiperSlide key={card.id}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={card.image} alt={card.title} className={styles.cardImage} />
                            </div>
                            <p className={styles.title}>{card.title}</p>
                            <p className={styles.para}>{card.desc}</p>
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