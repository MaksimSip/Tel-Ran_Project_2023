import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProductsByCategory } from '../../store/reducers/productsByCategoryReducer';
import s from './index.module.css'

export default function CategoryProductsFilterPrice() {

  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({ min: 0, max: Infinity });

  const filter_price = e => {

    const name = e.target.name;
    let value = +e.target.value;

    if (!isNaN(value)) {
      if (name === 'max' && value === 0) { value = Infinity }
      const updatedParams = { ...filterParams, [name]: value };
      setFilterParams(updatedParams);
      dispatch(filterProductsByCategory(updatedParams));
    }
  }

  return (
    <form className={s.filter_price_container}>
      <p>Price</p>
      <input type='text' placeholder='from' name='min' onChange={filter_price} />
      <input type='text' placeholder='to' name='max' onChange={filter_price} />
    </form>
  )
}
