import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoriesContainer from '../../components/CategoriesContainer'
import DiscountCouponContainer from '../../components/DiscountCouponContainer';
import ProductsContainer from '../../components/ProductsContainer';
import SaleFormMainCard from '../../components/SaleFormMainCard'
import { getCategories } from '../../requests/categories_req';
import { getSaleProducts } from '../../requests/products_req';
import s from './index.module.css'

export default function MainPage() {

  const dispatch = useDispatch();

  useEffect(() => dispatch( getSaleProducts), []);

  const sale_products_state = useSelector(state => state.saleProducts);

  // const categories_state = useSelector(state => state.categories);

  // const [randomCategories, setRandomCategories] = useState([]);

  // useEffect(() => {

  //   const shuffledCategories = [...categories_state].sort(() => Math.random() - 0.5);

  //   const selectedCategories = shuffledCategories.slice(0, 3);

  //   setRandomCategories(selectedCategories);

  // }, []);

  return (
    <div>
      < SaleFormMainCard />
      <div className={s.catalog_container}>
        <div className={s.catalog_container_text}>
        <h1>Catalog</h1> 
        <a href="/categories/all" className={s.a_button}><button>All categories</button></a>
        </div>
        < CategoriesContainer />
      </div>
      < DiscountCouponContainer />
      <div className={s.catalog_container}>
        <h1>Sale</h1>
        < ProductsContainer products={sale_products_state} />
      </div>
    </div>
  )
}
