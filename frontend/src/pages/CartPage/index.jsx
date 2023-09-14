import React from 'react'
import CartContainer from '../../components/CartContainer'
import s from './index.module.css'

export default function CartPage() {
  return (
    <div className={s.cart_page}>
      <p>Shopping cart</p>
      <div className={s.cart_page_products}>
      <CartContainer />
      </div>
    
    </div>
  )
}
