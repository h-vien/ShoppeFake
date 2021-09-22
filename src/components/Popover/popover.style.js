import styled, { keyframes } from 'styled-components'

export const PopoverEnterAnimation = keyframes`
0%{
transform: scale(0);
opacity: 0;
}
to{
    transform: scale(1);
    opacity: 1;

}

`
export const Drawer = styled.div`
  top: 100%;
  right: 0;
  position: absolute;
  will-change: transform;
  opacity: 1;
  z-index: 400;
  border: 1px solid rgba(0, 0, 0, 0.09);
  animation: ${PopoverEnterAnimation} 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:before {
    position: absolute;
    content: '';
    opacity: 1;
    width: 100%;
    top: -15px;
    left: 0;
    height: 20px;
  }
`
export const PopoverArrow = styled.div`
  border-bottom: 10px solid #ffff;
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  top: -10px;
  right: 0;
  position: absolute;
  width: 0;
  height: 0;
`
export const PopoverContent = styled.div`
  box-shadow: 0 1px 3.125rem 0 rgb(0 0 0 /20%);
  border-radius: 0% 0.125rem;
  overflow: hidden;
  background: #ffff;
`
