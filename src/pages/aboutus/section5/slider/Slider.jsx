// Slider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./styles.module.css";


const Slider = () => {
    const testimonials = [
        {
            id: 1,
            name: "Jacob",
            company: "CEO - IT Solution Company",
            text: "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id: 2,
            name: "Jacob",
            company: "CEO - IT Solution Company",
            text: "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
        {
            id: 3,
            name: "Jacob",
            company: "CEO - IT Solution Company",
            text: "Lorem ipsum dolor sit amet consectetur. Bibendum quis fringilla odio maecenas magna eu ultrices aliquam egestas. Enim phasellus eu commodo nibh vitae amet elit. Ut natoque dui."
        },
    ];

    return (
        <div className={styles.sliderContainer}>
            {/* <h2 className={styles.subHeading}>Testimonials</h2>
            <h1 className={styles.heading}>Voices of Trust</h1> */}
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                modules={[Navigation]}
                className={styles.mySwiper}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className={styles.testimonialCard}>
                            <div className={styles.imageContainer}>
                                <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/person.svg`} alt={testimonial.name} className={styles.personImage} />
                            </div>
                            <div className={styles.testimonialContent}>
                                <h3 className={styles.name}>{testimonial.name}</h3>
                                <p className={styles.company}>{testimonial.company}</p>
                                <p className={styles.testimonialText}>{testimonial.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.navigationContainer}>
                {/* <button className={`${styles.navButton} swiper-button-prev`}>
                    <IoChevronBack />
                </button>
                <button className={`${styles.navButton} swiper-button-next`}>
                    <IoChevronForward />
                </button> */}
            </div>
        </div>
    );
}

export default Slider;


