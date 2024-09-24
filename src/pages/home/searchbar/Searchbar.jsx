import React, { useState } from 'react';
import styles from "./styles.module.css";

import { LuPlusCircle } from "react-icons/lu";
import { PiMinusCircleBold } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const cities = [
  // Specific destinations
  "Dubai", "Maldives", "Vietnam", "London", "New York", "Port Blair", "Turkey", "Paris", "Lakshadweep", "Jammu & Kashmir",
  
  // Asian and Middle Eastern countries
  "Japan", "South Korea", "China", "Thailand", "Singapore", "Malaysia", "Indonesia", "Philippines",
  "Saudi Arabia", "UAE", "Qatar", "Oman", "Bahrain", "Kuwait", "Iran", "Iraq",
  
  // Indian metro cities
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Ahmedabad", "Pune", "Jaipur", "Lucknow"
];

const Searchbar = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [passenger, setPassenger] = useState(1);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const decrementPassenger = () => {
    if (passenger > 1) setPassenger(passenger - 1);
  };

  const incrementPassenger = () => {
    setPassenger(passenger + 1);
  };

  const clearForm = () => {
    setFrom("");
    setTo("");
    setStartDate(null);
    setReturnDate(null);
    setPassenger(1);
  };

  const handleSubmit = async () => {
    if (!from || !to || !startDate) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.kaushambiairways.com/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from,
          to,
          date: startDate.toISOString().split('T')[0],
          return: returnDate ? returnDate.toISOString().split('T')[0] : null,
          passenger: passenger.toString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Booking failed');
      }

      toast.success('Booking successful!');
      clearForm(); // Clear the form after successful booking
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.searchbarContainer}>
      <div className={styles.inputGroup}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/from1.svg`} alt="From" className={styles.icon} />
        <div className={styles.dropdownContainer}>
          <input
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onFocus={() => setShowFromDropdown(true)}
            onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
            className={styles.input}
          />
          {showFromDropdown && (
            <div className={styles.dropdown}>
              {cities.filter(city => city.toLowerCase().includes(from.toLowerCase())).map((city, index) => (
                <div key={index} onClick={() => setFrom(city)} className={styles.dropdownItem}>{city}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/from1.svg`} alt="To" className={styles.icon} />
        <div className={styles.dropdownContainer}>
          <input
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onFocus={() => setShowToDropdown(true)}
            onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
            className={styles.input}
          />
          {showToDropdown && (
            <div className={styles.dropdown}>
              {cities.filter(city => city.toLowerCase().includes(to.toLowerCase())).map((city, index) => (
                <div key={index} onClick={() => setTo(city)} className={styles.dropdownItem}>{city}</div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.inputGroup}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/date.svg`} alt="Date" className={styles.icon} />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd-MM-yyyy"
          placeholderText="Departure"
          minDate={new Date()}
          className={styles.input}
        />
      </div>

      <div className={styles.inputGroup}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/date.svg`} alt="Return" className={styles.icon} />
        <DatePicker
          selected={returnDate}
          onChange={(date) => setReturnDate(date)}
          dateFormat="dd-MM-yyyy"
          placeholderText="Return"
          minDate={startDate || new Date()}
          className={styles.input}
        />
      </div>

      <div className={styles.passengerGroup}>
        <PiMinusCircleBold className={styles.passengerIcon} color={passenger === 1 ? "#D3D3D3" : "black"} onClick={decrementPassenger} />
        <p className={styles.passengerText}>{passenger} Passenger{passenger !== 1 ? 's' : ''}</p>
        <LuPlusCircle className={styles.passengerIcon} onClick={incrementPassenger} />
      </div>

      <div className={styles.searchButton} onClick={handleSubmit} disabled={isSubmitting}>
        {isSubmitting ? (
          <div className={styles.spinner}></div>
        ) : (
          <BsArrowRight size={25} color={"#808080"} />
        )}
      </div>
    </div>
  );
};

export default Searchbar;