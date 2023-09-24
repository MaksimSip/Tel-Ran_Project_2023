import React from 'react'
import { useDispatch } from 'react-redux';
import { filterProductsByPriceAction } from '../../store/reducers/allProductsReducer';
import s from './index.module.css'

export default function FilterPriceContainer() {

  const dispatch = useDispatch();

  // const [filterParams, setFilterParams] = useState({ min: 0, max: Infinity });

  // const filterHandler = event => {
  //   const name = event.target.name;
  //   const value = +event.target.value;

  //   if (!isNaN(value)) { 
  //       const updatedParams = { ...filterParams, [name]: value };
  //       setFilterParams(updatedParams);
  //       dispatch(filterProductsByPriceAction(updatedParams));
//     }
// };

  const filter_price = e => {
    e.preventDefault();
    const { min, max } = e.target;
    const min_value = +min.value || 0;
    const max_value = +max.value || Infinity;
    dispatch(filterProductsByPriceAction({ min_value, max_value }));

  }


  return (
    <form className={s.filter_price_container}>
      <p>Price</p>
      <input type='text' placeholder='from' name='min' onChange={filter_price} />
      <input type='text' placeholder='to' name='max' onChange={filter_price} />

    </form>
  )
}
