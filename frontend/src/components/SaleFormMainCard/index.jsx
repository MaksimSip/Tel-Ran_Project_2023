import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'

export default function SaleFormMainCard() {
  return (
    <div className={s.saleFormMainCard}>
      <div className={s.text_button}>
        <h1>Sale</h1>
        <h2>New season</h2>
        <Link to='/products/sale'>
          <button>Sale</button>
        </Link>
      </div>
      <img src="../images/SaleImg.png" alt="Plants" />
    </div>
  )
}
