import React from 'react'
import * as S from './popover.style'
import PropTypes from 'prop-types'
export default function Popover({ active, children }) {
  return (
    <>
      {active && (
        <S.Drawer>
          <S.PopoverArrow />
          <S.PopoverContent>{children}</S.PopoverContent>
        </S.Drawer>
      )}
    </>
  )
}

Popover.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
}
