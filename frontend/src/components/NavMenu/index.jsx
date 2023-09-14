import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'
import { HiOutlineShoppingBag } from 'react-icons/hi'



export default function NavMenu() {
  return (
    <div className={s.nav_menu}>
      <div className={s.logo_button}>
        <Link to='/'><img src="../images/logo.png" alt="logo" /></Link>
        <Link to='/categories/all'><button>Catalog</button></Link>
      </div>
      <div className={s.links}>
        <Link to='/'>Main Page</Link>
        <Link to='/products/all'>All products</Link>
        <Link to='/products/sale'>All sales</Link>
      </div>
      <Link to='/cart' className={s.cart}><HiOutlineShoppingBag className={s.cart_img}/></Link>
    </div>
  )
}
