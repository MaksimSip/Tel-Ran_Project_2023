import React from 'react'
import { useDispatch } from 'react-redux';
import { getCheapProductsByCategory } from '../../store/reducers/productsByCategoryReducer';
import s from './index.module.css'

export default function CategoryProductsDiscountedItems() {

  const dispatch = useDispatch();

  const handleClick = e => dispatch(getCheapProductsByCategory(e.target.checked));

  return (
    <label className={s.discounted_items_container}>
      <span>Discounted items</span>
      <input type="checkbox" onClick={handleClick} />
    </label>
  )
}
