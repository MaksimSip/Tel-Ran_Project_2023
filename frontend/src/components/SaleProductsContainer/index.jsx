import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSaleProducts } from '../../requests/products_req';
import FilterPriceContainer from '../FilterPriceContainer';
import ProductCard from '../ProductCard';
import SortingContainer from '../SortingContainer';
import s from './index.module.css'


export default function SaleProductsContainer() {
   
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getSaleProducts())}, [dispatch])

    const products_state = useSelector(state => state.allproducts)

    console.log(products_state,'products_state')

      return (
    <div className={s.discount_container}>
      <h2>Products with sale</h2>
      <div className={s.sort_container}>
        <FilterPriceContainer/>
        <SortingContainer/>

      </div>
      <div className={s.discount_card}>
      {
        products_state.filter(el => !el.hide_price)
        .map(el => <ProductCard key={el.id} {...el} />)
      }
      </div>
    </div>
  )
}