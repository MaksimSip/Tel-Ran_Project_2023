import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../requests/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import SortingContainer from '../../components/SortingContainer';
import FilterPriceContainer from '../../components/FilterPriceContainer';
import DiscountedItemsContainer from '../../components/DiscountedItemsContainer';
import s from './index.module.css'


export default function AllProductsPage() {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getAllProducts) }, []);

  const products_state = useSelector(state => state.allProducts);

  return (
    <div className={s.all_products_page}>
      <h2>All products</h2>
      <div className={s.filters}>
        <FilterPriceContainer />
        <DiscountedItemsContainer />
        <SortingContainer />
      </div>
      <ProductsContainer products={products_state} />
    </div>
  )
}
