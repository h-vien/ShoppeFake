import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Drawer } from '../Popover/popover.style'
export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  cursor: auto;
`
export const NavLink = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  &:hover {
    color: hsla(0, 0%, 100%, 0.7);
  }
`
export const NavLeft = styled.ul`
  display: flex;
  align-items: center;
  margin-bottom: 0;
  li {
    color: #fff;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      margin-right: 5px;
      fill: #fff;
      height: 16px;
      width: 16px;
    }
  }
`
export const Scan = styled.div`
  position: relative;
  ${Drawer} {
    width: max-width;
    top: 155%;
  }
`

export const ScanImg = styled.img`
  width: 130px;
  height: 130px;
`
export const Notice = styled.div`
  position: relative;
  ${Drawer} {
    width: max-width;
    top: 155%;
  }
`

export const NoticeBody = styled.div`
  width: 40rem;
  height: 55rem;
`

export const NavRight = styled.div`
  color: #fff;
  ul {
    display: flex;
    align-items: center;
    li {
      padding-right: 1rem;
      margin-right: 1rem;
      position: relative;
      cursor: pointer;
      :not(:last-child):before {
        content: '';
        position: absolute;
        height: 100%;
        right: 0rem;
        width: 1px;
        background-color: hsla(0, 0%, 80%, 0.8);
      }
    }
  }
`

//User
export const User = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin: 0 1rem;
  ${Drawer} {
    width: 15rem;
    top: 145%;
    right: 5%;
  }
`
export const UserImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`
export const UserName = styled.div`
  padding-left: 5px;
  max-width: 15rem;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const UserButton = styled.button`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  background: transparent;
  border: 0;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
export const UserLink = styled(Link)`
  color: rgba(0, 0, 0, 0.8);
  padding: 1rem 0 1rem 1.5rem;
  display: block;
  &:hover {
    background-color: #fafafa;
    color: #00bfa5;
  }
`
//End User
