import React from 'react'
import CartContainer from '../../components/CartContainer'
import s from './index.module.css'
import { SlArrowRight } from 'react-icons/sl'

export default function CartPage() {
  return (
    <div className={s.cart_page}>
      <p className={s.cart_page_title}>Shopping cart</p>
      <a href="/categories/all" className={s.cart_page_back}>Back to the store <SlArrowRight className={s.cart_page_img} /></a>
      <div className={s.cart_page_products}>
        <CartContainer />
      </div>
    </div>
  )
}
