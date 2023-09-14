import React from 'react'
// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { getCategories } from '../../requests/categories_req';
import s from './index.module.css'


export default function CategoryCard({ id, image, title }) {

   // useEffect(() => getCategories(), []);

  return (

    <Link to={`/categories/${id}`}>
      <div className={s.card}>
        <img src={`http://localhost:3333/${image}`} alt={title} />
        <p>{title}</p>
      </div>
    </Link>

  )
}
