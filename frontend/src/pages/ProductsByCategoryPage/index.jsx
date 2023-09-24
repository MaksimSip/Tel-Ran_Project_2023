import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductsContainer from '../../components/ProductsContainer';
import { getProductsByCategory } from '../../requests/products_req'
import s from './index.module.css'

export default function ProductsByCategoryPage( ) {

  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {dispatch(getProductsByCategory(category))}, [dispatch]);

  const catigory_products_state = useSelector(state => state.productsByCategory);

  const catigory = catigory_products_state.category?.[0]?.title;

  const products = catigory_products_state?.data || []


    return (
    <div className={s.products_by_category_page}>
      <h2>{catigory}</h2>
    < ProductsContainer products= {products} />
    </div>
  )
}
