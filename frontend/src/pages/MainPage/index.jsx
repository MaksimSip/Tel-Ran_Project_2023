import React from 'react'
import CategoriesContainerMain from '../../components/MainCategoriesContainer';
import DiscountCouponContainer from '../../components/DiscountCouponContainer';
import SaleFormMainCard from '../../components/SaleFormMainCard'
import s from './index.module.css'
import MainSaleProductsContainer from '../../components/MainSaleProductsContainer';

export default function MainPage() {

  return (
    <div>
      < SaleFormMainCard />
      <div className={s.catalog_container}>
        <div className={s.catalog_container_text}>
          <h1>Catalog</h1>
          <a href="/categories/all" className={s.a_button}><button>All categories</button></a>
        </div>
        < CategoriesContainerMain />
      </div>
      < DiscountCouponContainer />
      <div className={s.catalog_container}>
        <h1>Sale</h1>
        <MainSaleProductsContainer />
      </div>
    </div>
  )
}


