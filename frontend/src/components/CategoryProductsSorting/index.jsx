import React from 'react'
import { useDispatch } from 'react-redux';
import { sortProductsAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'

export default function SortingContainer() {

    const dispatch = useDispatch();

    const sort = e => dispatch(sortProductsAction((e.target.value)));

  return (
    <label className={s.sorting_container}>
        <span>Sorted</span>
        <select onChange={sort}>
            <option value='default'>By default</option>
            <option value='title'>By title A-Z</option>
            <option value='price_asc'>By price ASC</option>
            <option value='price_desc'>By price DESC</option>
        </select>
    </label>
  )
}
