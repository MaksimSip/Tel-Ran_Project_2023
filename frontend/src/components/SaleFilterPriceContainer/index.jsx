import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { saleFilterProductsByPriceAction } from '../../store/reducers/saleProductsReducer';
import s from './index.module.css'

export default function SaleFilterPriceContainer() {

  const dispatch = useDispatch();

  const [filterParams, setFilterParams] = useState({ min: 0, max: Infinity });

  const filter_price = e => {

    const name = e.target.name;
    let value = +e.target.value;

    if (!isNaN(value)) {
      if (name === 'max' && value === 0) { value = Infinity }
      const updatedParams = { ...filterParams, [name]: value };
      setFilterParams(updatedParams);
      console.log(updatedParams);
      dispatch(saleFilterProductsByPriceAction(updatedParams));
    }
  }

  return (
    <form className={s.filter_price_container}>
      <p>Price</p>
      <input type='number' placeholder='from' name='min' onChange={filter_price} />
      <input type='number' placeholder='to' name='max' onChange={filter_price} />
    </form>
  )
}
