import React, { useState } from 'react'
import styled from 'styled-components'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";


function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)

  return (
    <Container>
      <a>
        <img src='/images/logo.svg' />
      </a>

      <Menu>
        {cars && cars.map((car, index)=>(
          <a href='#' key={index}>{car}</a>
        ))}

      </Menu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)}>Menu</CustomMenu>
        {/* <CustomMenu onClick={() => setBurgerStatus(true)}/> */}
      </RightMenu>
      
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrapper>
        {cars && cars.map((car, index)=>(
          <li key={index}><a href='#'>{car}</a></li>
        ))}
        
        <li><a href='#'>Solar Roof</a></li>
        <li><a href='#'>Solar Panels</a> </li> 
        <li><a href='#'>Existing Inventory</a></li>
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-In</a></li>
        <li><a href='#'>Test Drive</a></li>
        <li><a href='#'>Insurance</a></li>
        <li><a href='#'>Powerwall</a></li>
        <li><a href='#'>Commercial Energy</a></li>
        <li><a href='#'>Utilities</a></li>
        <li><a href='#'>Charging</a></li>
        <li><a href='#'>Find Us</a></li>
        <li><a href='#'>Support</a></li>
        <li><a href='#'>Investor Relations</a></li>
        <li><a href='#'>Shop</a></li>
        <li><a href='#'>Account</a></li>
        <li><a href='#'>More</a></li>
      </BurgerNav >
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  padding:0 20px;

  a{
    text-decoration: none;
    list-style: none;
  }
`
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  a{
    font-weight: 700;
    padding: 0 2em;
  }
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 700;
    padding: 0 10px;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }
  @media(max-width: 700px){
    display: none;
  }

`

const CustomMenu = styled.a`
  cursor: pointer;
  &:hover{
    background: rgba(0,0,0, 0.4);
    padding: 0.15rem auto;
    border-radius: 4px
  }
`


// const CustomMenu = styled(MenuOutlinedIcon)`
//   cursor: pointer;
// `


const BurgerNav = styled.div`
  position: fixed;
  text-align: start;
  padding: 1em;
  z-index: 9999;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: white;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .3s ease;

  li{
    list-style: none;
    padding: .2em 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
  }
`

const CloseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: .5em 0;
`
const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`