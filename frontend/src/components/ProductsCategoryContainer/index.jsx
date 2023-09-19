import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import ProductCard from '../ProductCard';
import { getProductsByCategory } from '../../requests/categories_req';
import ProductsCategorySort from '../ProductsCategorySort';
import s from './index.module.css'


export default function ProductsCategoryContainer() {

    const dispatch = useDispatch();

    const { categoryId } = useParams();

    useEffect(() => { dispatch(getProductsByCategory(categoryId)) }, [])


    const categoryProduct_state = useSelector(state => state.categories)

    return (
        <div className={s.category_container}>

            <div>
                <ProductsCategorySort />
            </div>
            <div className={s.product_container}>
                {
                    categoryProduct_state.filter(el => !el.hide_price && el.hide_sale).map(el => <ProductCard key={el.id} {...el} />)
                }
            </div>
        </div>
    )
}