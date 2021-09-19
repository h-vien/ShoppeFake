import React from 'react'
import * as S from './productQuantityController.stye'
import PropTypes from 'prop-types'
export default function ProductQuantityController({ value, max, onChange }) {
  const handleChange = value => {
    let _value = Number(value)
    if (_value > max) {
      _value = max
    } else if (_value <= 0) {
      _value = 1
    }
    onChange && onChange(_value)
  }
  const increase = () => {
    let _value = value + 1
    if (_value > max) {
      _value = max
    }
    onChange && onChange(_value)
  }
  const decrease = () => {
    let _value = value - 1
    if (_value < 1) {
      _value = 1
    }
    onChange && onChange(_value)
  }
  return (
    <div>
      <S.ProductQuantityController>
        <S.ProductQuantityButton onClick={decrease}>
          <svg
            enable-background="new 0 0 10 10"
            viewBox="0 0 10 10"
            x="0"
            y="0"
            class="shopee-svg-icon "
          >
            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
          </svg>
        </S.ProductQuantityButton>
        <S.ProductQuantityInput
          value={value}
          max={max}
          onChange={handleChange}
        />
        <S.ProductQuantityButton onClick={increase}>
          <svg
            enableBackground="new 0 0 10 10"
            viewBox="0 0 10 10"
            x={0}
            y={0}
            className="shopee-svg-icon icon-plus-sign"
          >
            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5" />
          </svg>
        </S.ProductQuantityButton>
      </S.ProductQuantityController>
    </div>
  )
}

ProductQuantityController.propsTypes = {
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}
