import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSaleProducts } from '../../requests/products_req';
import ProductCard from '../ProductCard';
import s from './index.module.css'


export default function MainSaleProductsContainer() {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getSaleProducts) }, [dispatch]);

  const product_state = useSelector(state => state.saleProducts)

  const products_sale = product_state.filter(el => el.visible === true)

  const random = (arr, count) => {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  const product_main = random(products_sale, 4);
  
  return (

    <div className={s.discount_card}>

      {
        product_main.map(el => <ProductCard key={el.id} {...el} />)
      }

    </div>

  )
}