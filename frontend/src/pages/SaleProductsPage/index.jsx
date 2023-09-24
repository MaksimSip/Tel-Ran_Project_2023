import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSaleProducts } from '../../requests/products_req';
import ProductsContainer from '../../components/ProductsContainer';
import s from './index.module.css'
import SaleFilterPriceContainer from '../../components/SaleFilterPriceContainer';
import SaleSortingContainer from '../../components/SaleSortingContainer';


export default function SaleProductsPage() {

  const dispatch = useDispatch();

  useEffect(() => {dispatch(getSaleProducts)}, [dispatch]);

  const sale_products_state = useSelector(state => state.saleProducts);



  return (
    <div className={s.sale_products_page}>
      <h2>Products with sale</h2>
      <div className={s.filters}>
      <SaleFilterPriceContainer />
      <SaleSortingContainer />
      </div>
      <ProductsContainer products={sale_products_state} />
    </div>
  )
}
