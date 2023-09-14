import React from 'react'
import { useDispatch } from 'react-redux';
import { filterProductsByPriceAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'

export default function FilterPriceContainer() {

  const dispatch = useDispatch();

const filter_price = e => {
  e.preventDefault();
  const { min, max } = e.target;
  const min_value = +min.value || 0;
  const max_value = +max.value || Infinity;
  dispatch(filterProductsByPriceAction({min_value, max_value}));

} 


  return (
    <form onSubmit={filter_price} className={s.filter_price_container}>
        <p>Price</p>
        <input type='number' placeholder='from' name='min' />
        <input type='number' placeholder='to' name='max' />
        <button>Filter</button>
    </form>
  )
}
