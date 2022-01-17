import { useState } from 'react'
import styled from 'styled-components'

interface ButtonBurgerProps {
  cBackgroundColor?: string
  cColor?: string
  open: boolean
}

const StyledButtonBurger = styled.button<ButtonBurgerProps>`
  border: none;
  outline: none;
  cursor: pointer;

  &.menu-toggle {
    width: 100%;
    height: 100%;
    max-width: 22px;
    max-height: 16px;
    display: block;
    position: relative;
    background: transparent;
    border-top: 2px solid;
    border-bottom: 2px solid;
    font-size: 0;
    ${({ cColor }) => (cColor ? 'color:' + cColor : '#000')};
    transition: all 0.25s ease-in-out;

    &:before,
    &:after {
      content: '';
      width: 100%;
      height: 2px;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      background: currentColor;
      transform: translate(-50%, -50%);
      transition: transform 0.25s ease-in-out;
    }
  }

  &.menu-toggle.is-active {
    border-color: transparent;

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  /* 
  ////////////////////////////////
  //burguer X usando 3 span
  ///////////////////////////////
  width: 22px;
  height: 22px;
  background-color: transparent;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  span {
    width: 22px;
    height: 2px;
    display: block;
    background-color: ${({ cBackgroundColor }) => cBackgroundColor};
    border-radius: 2px;
    transform-origin: 0%;
    transition: all 0.35s ease-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'translate(15%, -40%) rotate(45deg)' : 'translate(0%, 0%) rotate(0)')};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'translate(15%, 40%) rotate(-45deg)' : 'translate(0%, 0%) rotate(0)')};
    }
  } */
`

export default function ButtonBurger(props: any) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledButtonBurger
        className={open ? 'menu-toggle is-active' : 'menu-toggle'}
        open={open}
        cColor={props.cColor}
        cBackgroundColor={props.cBackgroundColor}
        onClick={() => setOpen(!open)}
      >
        Menu
      </StyledButtonBurger>

      {/* <StyledButtonBurger open={open} cBackgroundColor={props.cBackgroundColor} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledButtonBurger> */}
    </>
  )
}
