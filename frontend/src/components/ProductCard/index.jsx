import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { useDispatch } from 'react-redux'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function ProductCard({ id, image, title, price, discont_price }) {

  const dispatch = useDispatch();

  return (

    <div className={s.card}>
      <Link to={`/products/${id}`}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <div>
          {discont_price ? (
            <div className={s.price}>
              <p className={s.price_1}>{discont_price}$</p>
              <p className={s.price_2}>{price}$</p>
              <p className={s.price_3}>-{Math.round(((price - discont_price) / price) * 100)}%</p>
            </div>
          ) : (
            <p className={s.price_1}>{price}$</p>
          )}
          <div className={s.title}>
            <p>{title}</p>
          </div>
        </div>
      </Link>
      <div
        className={s.add_to_cart_btn}
        onClick={() => dispatch(addToCartAction({ id, image, title, price, discont_price }))}
      >
        Add to cart
      </div>
    </div>


  )
}
