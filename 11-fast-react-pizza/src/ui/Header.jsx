import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/searchOrder'
function Header() {
  return (
    <header>
        <Link to='/'>Fast React Pizza Co.</Link>
        <SearchOrder/>
        <p>Ahmad Imran</p>
    </header>
  )
}

export default Header
