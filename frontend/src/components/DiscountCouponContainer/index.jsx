import React from 'react'
import s from './index.module.css'

export default function DiscountCouponContainer() {
  return (
    <div className={s.discountCouponContainer}>
        <img src="../images/Gnom.png" alt="Little gnome with a rake" />
        <div>
            <h1>5% off</h1>
            <h3>on the first order</h3>
            <input type="number" placeholder='   Phone number' name='phone' />
            <button>Get a discount</button>
        </div>
    </div>
  )
}
