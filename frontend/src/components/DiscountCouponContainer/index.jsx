import React from 'react'
import { useForm } from 'react-hook-form'
import { setFormDiscount } from '../../requests/discountCoupon_req';
import s from './index.module.css'

export default function DiscountCouponContainer() {

  const submit = (data) => {
    setFormDiscount(data, reset);
    reset();
  }

  const { register, handleSubmit, reset } = useForm({ mode: 'onBlur' });

  return (
    <div className={s.discountCouponContainer}>
      <img src="../images/Gnom.png" alt="Little gnome with a rake" />
      <form onSubmit={handleSubmit(submit)}>
        <h1>5% off</h1>
        <h3>on the first order</h3>
        <input type="tel" placeholder='Phone number' name='phone' {...register("phone")} />
        <button>Get a discount</button>
      </form>
    </div>
  )
}
