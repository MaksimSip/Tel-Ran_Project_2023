import React from 'react'
import {useDispatch} from 'react-redux'
import { sortProductsCategoryAction, getCheapProductsCategoryAction,filterProductsCategoryByPriceAction} from '../../store/reducers/categoriesReducer';
import s from './index.module.css'

export default function ProductsCategorySort() {
    
    const dispatch = useDispatch();

    const sorting = event => dispatch(sortProductsCategoryAction(event.target.value));

    const filter = event => dispatch(getCheapProductsCategoryAction(event.target.checked))

    const filter_price = () => {
      const min = document.getElementsByName('min')[0].value || 0;
      const max = document.getElementsByName('max')[0].value || Infinity;
      dispatch(filterProductsCategoryByPriceAction({ min_value: min, max_value: max }));
    }
    
  return (
    <div className={s.sort_container}>
      <div className={s.form_price}>
      <form >
      <label htmlFor='price'>Price</label>
      <input type="text" name="min" placeholder="from" onChange={filter_price} />
      <input type="text" name="max" placeholder="to" onChange={filter_price} />
      </form>
        </div>  
        <div >
          <form className={s.discoun_form}>
            <span>Discounted items</span>
            <input name="discount" type="checkbox" onChange={filter} />
          </form>
      </div>
      <div className={s.sorting}>
      <p>Sorted</p>
      <select onInput={sorting}>
        <option value='default'>by default</option>
        <option value='title'>By title A-Z</option>
        <option value='price_asc'>by price ASC</option>
        <option value='price_desc'>By price DESC</option>
      </select>
      </div>
    </div>
  )
}