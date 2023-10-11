import React from 'react'
import MainCategoriesContainer from '../../components/MainCategoriesContainer';
import DiscountCouponContainer from '../../components/DiscountCouponContainer';
import SaleFormMainCard from '../../components/SaleFormMainCard'
import MainSaleProductsContainer from '../../components/MainSaleProductsContainer';

export default function MainPage() {

  return (
    <div>
      < SaleFormMainCard />
      < MainCategoriesContainer />
      < DiscountCouponContainer />
      < MainSaleProductsContainer />
    </div>
  )
}


