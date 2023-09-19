import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../CartItem';
import s from './index.module.css'

export default function CartContainer() {

    

  const cart_state = useSelector(state => state.cart);

  

  return (

    <div className={s.cart_container}>
      <div>
        {
          cart_state.map(el => <CartItem key={el.id} {...el} />)
        }
      </div>
     
      
      <div className={s.cart_page_form}>
      <form>
        <h2>Order details</h2>
        <div className={s.total}>
        <h3>Total</h3>
        <p>
          {
            cart_state.reduce((acc, { price, count }) => acc + price * count, 0)
          }<span className={s.price_1_sm}>$</span>
        </p>
        </div>
        <input type="text" placeholder='Phone number' name='phone' />
        <br/>
        <button>Order</button>
    </form>
      </div>
        
      </div>
   
  )
}