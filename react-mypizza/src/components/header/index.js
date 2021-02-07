import React, {useState, useEffect} from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import Logout from '../logout'
import {useDispatch} from 'react-redux'
import {FaBars} from 'react-icons/fa'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import storage from 'local-storage-fallback'
import toggleImage from '../../assets/images/themetoggle.png'


import {useTranslation} from 'react-i18next'

const Header = () => {
    const {t, i18n} = useTranslation()
    
    const getInitialTheme = () => {
        const savedTheme = storage.getItem('theme')
        return savedTheme ? JSON.parse(savedTheme) : { mode: 'dark'}
    }
    const [theme, setTheme] = useState(getInitialTheme);
    
    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    

    return (
        <>
          <ThemeProvider theme={theme}>
          <GlobalStyle/>
            <HeaderContainer>
                <TitleLink to="/pizzas">My Pizza</TitleLink>
                <NavMenu>
                    <NavLink to="/pizzas">{i18n.t('header.list')}</NavLink>
                    <NavLink to="/home">{i18n.t('header.configurator')}</NavLink>
                    <NavLink to="/cart">{i18n.t('header.panier')}</NavLink>
                </NavMenu>
                <ToogleTheme onClick={e => setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})}/>
                    <Logout />
                    <Langue>
                        <BtnLangue onClick={() => i18n.changeLanguage('fr')}>fr</BtnLangue>
                        <BtnLangue onClick={() => i18n.changeLanguage('en')}>en</BtnLangue>
                    </Langue>
            </HeaderContainer>
            </ThemeProvider>
        </>
    )
}

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => 
    props.theme.mode === 'dark' ? '#222' : '#c7c7cd'};
  color: ${props => 
    props.theme.mode === 'dark' ? '#c7c7cd' : '#222'};
  }

`
const Langue = styled.div`
display: flex;
align-items: center;
padding: 0 1rem;
`

const BtnLangue = styled.button`
color: white;
margin: 0 1px;
border: 1px solid #8F8989;
width: 25px;
text-align: center;
margin-right: 10px;
    border-radius:2px;
    border:1px solid #d34836 ;
    height: 3vh;
    cursor: pointer;
    background: none;
    &:hover{
        background: #d34836;
    }
`

const ToogleTheme = styled.p `
background-image:url(${toggleImage});
width: 33px;
height: 32px;
background-repeat: no-repeat;
background-size: cover;
float: left;
clear:both;
cursor: pointer;
`


const HeaderContainer = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    background: #191919;
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
<<<<<<< HEAD
=======

>>>>>>> 4314c3f28166f3907146403f944991382d352cc6
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
    color: #d34836;
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