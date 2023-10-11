import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_req';
import CategoryCard from '../CategoryCard';
import s from './index.module.css'


export default function MainCategoriesContainer() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(getCategories), []);

  const categories_state = useSelector(state => state.categories);

  return (
    <div className={s.main_categories_container}>

      <div className={s.catalog_container_text}>
        <h1>Catalog</h1>
        <a href="/categories/all" className={s.a_button}><button>All categories</button></a>
      </div>

      <div className={s.container}>

        {
          categories_state.slice(0, 4).map(el => <CategoryCard key={el.id} {...el} />)
        }

      </div>
    </div>
  )
}
