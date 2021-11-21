import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../../assets/styles/utils'

export const Header = styled.header`
  margin-bottom: 3rem;
  width: 100%;
  min-width: max-content;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`
export const Navbar = styled.div`
  background: linear-gradient(-180deg, #193498, #1597e5);
  color: #fff;
`
export const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10rem;
`
export const Logo = styled(Link)`
  padding-left: 1.8rem;
  flex-shrink: 1;
  display: flex;
  align-items: center;
  svg {
    width: 13rem;
    height: auto;
    cursor: pointer;
    fill: #1597e5;
  }
`
export const LogoPageName = styled.div`
  margin-left: 1.5rem;
  margin-top: 1rem;
  border-left: 1px solid #1597e5;
  color: #1597e5;
  font-size: 2rem;
  line-height: 1.5;
  padding-left: 1.5rem;
  text-transform: capitalize;
`
export const Form = styled.form`
  flex: 0 0 50%;
  display: flex;
  align-items: stretch;
  border: 1px solid #1597e5;
  height: 3.6rem;
  border-radius: 2px;
  background: #fff;
`
export const Input = styled.input`
  flex-grow: 1;
  border: 0;
  padding: 0 1rem;
`
export const ButtonSearch = styled(Button)`
  height: 100%;
  outline: none;
  width: 8rem;
  border-radius: 0;
`
