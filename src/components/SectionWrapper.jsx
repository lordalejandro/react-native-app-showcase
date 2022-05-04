import React from 'react'

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
      <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:3-3/4`}>
        <div className={`${styles.descDiv} ${reverse ? "fadeRightMini" : "fadeLeftMini"}`}>
          <h1 className={`${styles.h1Text} ${reverse ? styles.blackText : styles.whiteText}`}>{title}</h1>
          <p className={`${styles.descriptionText} ${reverse ? styles.blackText : styles.whiteText}`}>{description}</p>
          {showBtn && (
            <Button assetUrl={assets.expo} link="https://expo.dev/@avilaca/react-app?serviceType=classic&distribution=expo-go" />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img className={`${styles.sectionImg} ${reverse ? "fadeLeftMini" : "fadeRightMini"} max-h-[550px]`} src={mockupImg} alt="mockup" />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper