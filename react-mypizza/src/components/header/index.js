import React, {useState} from 'react'

import { NavLink as Link} from 'react-router-dom';
import styled from 'styled-components'

import Logout from '../logout'
import {useDispatch} from 'react-redux'
import bgimg from "../../assets/images/cart.PNG";
import {FaBars} from 'react-icons/fa'

// const cartCount = useState(0)

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <TitleLink to="/pizzas">My Pizza</TitleLink>
                {/* <Bars /> */}
                <NavMenu>
                    <NavLink to="/pizzas">Liste de Pizzas</NavLink>
                    <NavLink to="/home">Mon configurateur</NavLink>
                    <NavLink to="/cart">Mon panier</NavLink>
                </NavMenu>
                {/* <LogoutBtn> */}
                    {/* <LogoutBtnLink to="/home">OUi</LogoutBtnLink> */}
                    <Logout />
                {/* </LogoutBtn> */}
            </HeaderContainer>
        </>
    )
}


const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    background: #000;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    font-family: 'Carter One', cursive;
`

const TitleLink = styled(Link)`
color :#d34836;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
cursor: pointer;

&:hover {
    color: white;
}
`

const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    // @media screen and (max-width: 768px) {
    //     display: none;
    // }
`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color: #15cdfc;
}
`

const LogoutBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

const LogoutBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
cursor: pointer;
border: none;
outline: none;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
    background: #fff;
}
`

export default Header