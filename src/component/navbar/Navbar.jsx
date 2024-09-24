import React, { useState, useEffect } from 'react'
import styles from "./styles.module.css"

import { Link } from 'react-router-dom'
import Modal from '../contactModal/Modal'

const Navbar = () => {
  const list1 = [
    { id: 1, name: "Buisness Charters" },
    { id: 2, name: "Election Flying" },
    { id: 3, name: "International Charters" },
    { id: 4, name: "Wedding or Group Charters" },
    { id: 5, name: "Char Dham Yatra" },
    { id: 6, name: "Air Ambulance" },
    { id: 7, name: "Joy Ride" },
  ]
  const list2 = [
    { id: 1, name: "Helicopters" },
    { id: 2, name: "Mid-Size Jets" },
    { id: 3, name: "Large Jets" },
    { id: 4, name: "Turbo Prop" },
  ]

  const [drop1, setDrop1] = useState(0);
  const [drop2, setDrop2] = useState(0);
  const [modal, setModal] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleModalclose = () => {
    setModal(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <div className={`${styles.container} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.textSection}>
        <Link to="/">
          <div className={styles.subtext}>HOME</div>
        </Link>
        <div className={`${styles.dropdownWrapper} relative`}>
          <div className={styles.subtext} onMouseEnter={() => setDrop1(1)} onMouseLeave={() => setDrop1(0)}>SERVICES</div>
          {drop1 === 1 && 
            <ul className={styles.dropdown} onMouseEnter={() => setDrop1(1)} onMouseLeave={() => setDrop1(0)}>
              {list1.map((item) => (
                <a key={item.id} href="/#ourFleet"><li key={item.id} className={styles.list}><span className={styles.listtext}>{item.name}</span></li></a>
              ))}
            </ul>
          }
        </div>
        <div className={`${styles.dropdownWrapper} relative`}>
          <div className={styles.subtext} onMouseEnter={() => setDrop2(1)} onMouseLeave={() => setDrop2(0)}>OUR FLEET</div>
          {drop2 === 1 && 
            <ul className={styles.dropdown} onMouseEnter={() => setDrop2(1)} onMouseLeave={() => setDrop2(0)}>
              {list2.map((item) => (
                <a key={item.id} href="/#ourFleet">
                  <li className={styles.list}><span className={styles.listtext}>{item.name}</span></li>
                </a>
              ))}
            </ul>
          }
        </div>
      </div>

      <div className={styles.midSection}>
        <img src={`https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/airways_Assets/hlogo.svg`} alt="img" className={styles.logo} />
      </div>

      <div className={styles.textSection}>
        <Link to="/aboutus">
          <div className={styles.subtext}>ABOUT US</div>
        </Link>
        <div className={styles.subtext} onClick={() => setModal(!modal)}>CONTACT</div>
        <div className={styles.subtext}>BOOK NOW</div>
      </div>

      <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.mobileSubtext}>HOME</div>
        </Link>
        <div className={styles.mobileDropdownWrapper}>
          <div className={styles.mobileSubtext} onClick={() => setDrop1(drop1 === 1 ? 0 : 1)}>SERVICES</div>
          {drop1 === 1 && 
            <ul className={styles.mobileDropdown}>
              {list1.map((item) => (
                <li key={item.id} className={styles.mobileList}><span className={styles.mobileListtext}>{item.name}</span></li>
              ))}
            </ul>
          }
        </div>
        <div className={styles.mobileDropdownWrapper}>
          <div className={styles.mobileSubtext} onClick={() => setDrop2(drop2 === 1 ? 0 : 1)}>OUR FLEET</div>
          {drop2 === 1 && 
            <ul className={styles.mobileDropdown}>
              {list2.map((item) => (
                <Link key={item.id} to="/#ourFleet" onClick={() => setMobileMenuOpen(false)}>
                  <li className={styles.mobileList}><span className={styles.mobileListtext}>{item.name}</span></li>
                </Link>
              ))}
            </ul>
          }
        </div>
        <Link to="/aboutus" onClick={() => setMobileMenuOpen(false)}>
          <div className={styles.mobileSubtext}>ABOUT US</div>
        </Link>
        <div className={styles.mobileSubtext} onClick={() => { setModal(!modal); setMobileMenuOpen(false); }}>CONTACT</div>
        <div className={styles.mobileSubtext}>BOOK NOW</div>
      </div>

      {modal && <Modal handleModalclose={handleModalclose} />}
    </div>
  )
}

export default Navbar