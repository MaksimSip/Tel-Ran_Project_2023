import React from 'react'
import { useSelector } from 'react-redux'
import { setOrder } from '../../requests/order_req';
import CartItem from '../CartItem';
import { useForm } from 'react-hook-form'
import s from './index.module.css'

export default function CartContainer() {

  const cart_state = useSelector(state => state.cart);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ mode: 'onBlur' });

  const submit = (data) => {
    const requestData = {
      id: Date.now(),
      phoneNumber: data.phone,
      products: cart_state,
    };

    setOrder(requestData)
      .then(() => {
        reset();
      });
    reset();
  };

  return (

    <div className={s.cart_container}>
      <div>
        {
          cart_state.map(el => <CartItem key={el.id} {...el} />)
        }
      </div>

      <div className={s.cart_page_form}>
        <form onSubmit={handleSubmit(submit)}>
          <h2>Order details</h2>
          <div className={s.total}>
            <h3>Total</h3>
            <p>
              {
                cart_state.reduce((acc, { price, count }) => acc + price * count, 0)
              }<span className={s.price_1_sm}>$</span>
            </p>
          </div>
          <input type="text" placeholder='Phone number' name='phone'  {...register("phone")} />
          <br />
          <button> Order </button>
        </form>
      </div>

    </div>
  )
}