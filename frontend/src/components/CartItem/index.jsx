import React from 'react'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { decrementCountAction, deleteFromCartAction, incrementCountAction } from '../../store/reducers/cartReducer';


export default function CartItem({ id, title, price, count, image, discont_price }) {

  const dispatch = useDispatch();

  return (

    <div className={s.cart_item}>
      <img src={`http://localhost:3333/${image}`} alt={title} />
      <div className={s.cart_item_title}>
        <p>{title}</p>
        <div className={s.count}>
          <p className={s.count_button} onClick={() => dispatch(decrementCountAction(id))}>-</p>
          <p className={s.count_p}>{count}</p>
          <p className={s.count_button} onClick={() => dispatch(incrementCountAction(id))}>+</p>
        </div>
      </div>
      <div>{discont_price ? (<p className={s.price_1}>{discont_price * count}<span className={s.price_1_sm}>$</span></p>
      ) : (
        <p className={s.price_1}>{price * count}<span className={s.price_1_sm}>$</span></p>
      )}
      </div>
      <p className={s.price_2}>{price}$</p>
      <p className={s.cart_item_x} onClick={() => dispatch(deleteFromCartAction(id))}>
        X
      </p>
    </div>
  )
}

