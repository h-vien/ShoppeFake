import React from 'react'
import PropTypes, { element } from 'prop-types'
import * as S from './checkBox.style'
function CheckBox({ onChange, checked, ...props }) {
  const handleChange = e => {
    const val = e.target.checked
    onChange && onChange(val)
  }
  return (
    <S.CheckBox>
      <S.CheckBoxInput
        type="checkbox"
        onChange={handleChange}
        checked={checked}
        {...props}
      />
      <S.CheckBoxBox />
    </S.CheckBox>
  )
}

CheckBox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool
}

export default CheckBox
