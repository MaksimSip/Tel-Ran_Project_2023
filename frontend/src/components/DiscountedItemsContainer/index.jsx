import React from 'react'
import { useDispatch } from 'react-redux';
import { getCheapProductsAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'

export default function DiscountedItemsContainer() {

  const dispatch = useDispatch();

  const handleClick = e => dispatch(getCheapProductsAction(e.target.checked));

  return (
    <label className={s.discounted_items_container}>
      <span>Discounted items</span>
      <input type="checkbox" onClick={handleClick} />
    </label>
  )
}

