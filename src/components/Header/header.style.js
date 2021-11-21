import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button, ButtonLink } from '../../assets/styles/utils'

export const StyledHeader = styled.header`
  background: linear-gradient(-180deg, #193498, #1597e5);
  margin-bottom: 3rem;
  width: 100%;
  min-width: max-content;
  cursor: auto;
`
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`
export const Logo = styled(Link)`
  margin-right: 4rem;
  svg {
    width: 162px;
    height: 50px;
    color: #fff;
  }
`
export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto 5rem;
`
export const CartContainer = styled.div`
  position: relative;
`
export const CartIcon = styled(Link)`
  padding: 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  svg {
    color: #fff;
    stroke: #fff;
    fill: currentColor;
    width: 26px;
    height: 26px;
  }
`
export const CartNumberBadge = styled.div`
  position: absolute;
  border-radius: 4rem;
  min-width: 11px;
  padding: 0 5px;
  text-align: center;
  border: 2px solid #1597e5;
  color: #1597e5;
  background-color: #fff;
  line-height: 1;
  top: 2px;
  right: 2px;
`

export const StyledForm = styled.form`
  flex-grow: 1;
  display: flex;
  flex-wrap: wrap;
  padding: 4px;
  background: #fff;
  border-radius: 2px;
  height: 4rem;
`
export const StyledInput = styled.input`
  flex-grow: 1;
  border: 0;
  padding-left: 1rem;
`
export const StyledButton = styled(Button)`
  padding: 0 20px;
  height: auto;
  svg {
    color: #fff;
    fill: currentColor;
  }
`

export const PopoverContent = styled.div`
  border-radius: 0.125rem;
  overflow: hidden;
  background-color: #fff;
  color: #c8c6c6;
  width: 40rem;
  padding: 5px;
`

export const PopoverTitle = styled.div`
  padding: 1.5rem 0 2rem 1rem;
  color: rgba(0, 0, 0, 0.26);
  text-transform: capitalize;
`
export const MiniProductCart = styled.div`
  display: flex;
  padding: 1rem;
`
export const MiniProductCartImg = styled.img`
  flex-shrink: 1;
  width: 4rem;
  height: 4rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
`
export const MiniProductCartTitle = styled.div`
  flex-grow: 1;
  text-overflow: ellipsis;
  color: #000;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 1rem;
`
export const MiniProductCartPrice = styled.div`
  margin-left: 4rem;
  flex-shrink: 1;
  color: #1597e5;
`
export const PopoverFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const MoreProduct = styled.div`
  flex-grow: 1;
  color: #000;
  text-transform: capitalize;
`
export const ButtonShowCart = styled(ButtonLink)`
  height: 3.5rem;
  padding: 1px 15px;
  text-transform: capitalize;
  flex-shrink: 0;
`
