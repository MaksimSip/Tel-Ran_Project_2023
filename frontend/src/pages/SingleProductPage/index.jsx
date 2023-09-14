import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../requests/products_req';
import s from './index.module.css'
import { addToCartAction } from '../../store/reducers/cartReducer';

export default function SingleProductPage() {

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => dispatch(getSingleProduct(id)), []);

  const product_state = useSelector(state => state.singleProduct);

  const { image, title, price, discont_price, description } = product_state;

  return (
    <div className={s.single_product}>
      <h3>{title}</h3>
      <div className={s.single_product_content}>
        <img src={`http://localhost:3333${image}`} alt={title} />
        <div className={s.price_descripcion}>
          <div>
            {discont_price ? (
              <div className={s.price}>
                <p className={s.price_1}>{discont_price}<span className={s.price_1_sm}>$</span></p>
                <p className={s.price_2}>{price}$</p>
                <p className={s.price_3}>-{Math.round(((price - discont_price) / price) * 100)}<span className={s.price_3_proc}>%</span></p>
              </div>
            ) : (
              <p className={s.price_1}>{price}<span className={s.price_1_sm}>$</span></p>
            )}
            <div
              className={s.add_to_cart_btn}
              onClick={() => dispatch(addToCartAction({ id: +id, title, price, image }))}
            >
              To cart</div>
          </div>
          <hr/>
          <h4>Description</h4>
          <p className={s.description}>{description}</p>
        </div>
      </div>
      </div>


      )
}

// попробовать затиреть объект