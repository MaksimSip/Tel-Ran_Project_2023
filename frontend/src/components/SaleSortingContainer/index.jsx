import React from 'react'
import { useDispatch } from 'react-redux';
import { saleSortProductsAction } from '../../store/reducers/saleProductsReducer';
import s from './index.module.css'

export default function SaleSortingContainer() {

  const dispatch = useDispatch();

  const sort = e => dispatch(saleSortProductsAction((e.target.value)));

  return (
    <label className={s.sorting_container}>
      <span>Sorted</span>
      <select onInput={sort}>
        <option value='default'>By default</option>
        <option value='title'>By title A-Z</option>
        <option value='price_asc'>By price ASC</option>
        <option value='price_desc'>By price DESC</option>
      </select>
    </label>
  )
}
