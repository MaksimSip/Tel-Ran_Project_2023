import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../requests/categories_req';
import CategoryCard from '../CategoryCard';
import s from './index.module.css'


export default function CategoriesContainerMain() {

  const dispatch = useDispatch();

  useEffect(() => dispatch(getCategories), []);

  const categories_state = useSelector(state => state.categories);

  return (
    <div className={s.container}>

      {
        categories_state.slice(0, 4).map(el => <CategoryCard key={el.id} {...el} />)
      }

    </div>
  )
}
