import React from 'react'
import s from './index.module.css'
import { PiInstagramLogoThin } from 'react-icons/pi'
import { PiWhatsappLogoThin } from 'react-icons/pi'

export default function Header() {
  return (
    
    <div className={s.header}>
      <div className={s.header_text}>
      <div className={s.header_left}>
        <h1>Contact</h1>
        <p className={s.number}>+49 999 999 99 99</p>
        <div className={s.social}>
          <a href="https://www.instagram.com/" target="_blank" className={s.social_ist}>
            <PiInstagramLogoThin className={s.header_img} />
            <p>Instagram</p>
          </a>
          <a href="https://www.whatsapp.com" target="_blank" className={s.social_whats}>
            <PiWhatsappLogoThin className={s.header_img} />
            <p>WhatsApp</p>
          </a>
        </div>
      </div>
      <div className={s.header_right}>
        <h1>Address</h1>
        <p className={s.adres}>Linkstraße 2, 8 OG, 10785, Berlin, Deutschland</p>
        <h3>Working Hours:</h3>
        <h4>24 hours a day</h4>
      </div>
      </div>
      <img src="../images/map.png" alt="map" />
    </div>
   
    
  )
}
