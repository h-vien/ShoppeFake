import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderCart from '../../components/HeaderCart/HeaderCart'
import PropTypes from 'prop-types'
// import { Container } from './styles';

function CartLayout({ children }) {
  return (
    <div>
      <HeaderCart />
      {children}
      <Footer />
    </div>
  )
}

export default CartLayout

CartLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
