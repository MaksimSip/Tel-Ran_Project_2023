import React from 'react'
import CategoriesContainer from '../../components/CategoriesContainer'
import s from './index.module.css'

export default function CategoriesPage() {
  return (
    <div className={s.categories_page}>
      <h1>Categories</h1>
      <CategoriesContainer />
    </div>
  )
}
