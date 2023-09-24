import React from 'react'
import { useForm } from 'react-hook-form'
import { getFormDiscount } from '../../requests/discountCoupon_req';
import s from './index.module.css'

export default function DiscountCouponContainer() {

  const submit = (data) => {
    getFormDiscount(data, reset);
    reset();
  }

  const { handleSubmit, reset } = useForm({ mode: 'onBlur' });

  return (
    <div className={s.discountCouponContainer}>
      <img src="../images/Gnom.png" alt="Little gnome with a rake" />
      <form onSubmit={handleSubmit(submit)}>
        <h1>5% off</h1>
        <h3>on the first order</h3>
        <input type="tel" placeholder='   Phone number' name='phone' />
        <button>Get a discount</button>
      </form>
    </div>
  )
}
