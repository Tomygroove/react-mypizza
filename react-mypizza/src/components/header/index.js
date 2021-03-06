import React, {useState, useEffect} from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import Logout from '../logout'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import storage from 'local-storage-fallback'
import toggleImage from '../../assets/images/themetoggle.png'
import Mobile from "./mobile";


import {useTranslation} from 'react-i18next'

const Header = () => {
    const {t, i18n} = useTranslation()

    const [isMobile,setIsMobile] = useState(window.matchMedia('(max-width:768px)').matches);
    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width:768px)').matches);
        })
    })
    
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
                {isMobile ?
                    <Mobile />
                :
                <NavMenu>
                    <Nav>
                        <NavLink to="/pizzas">{i18n.t('header.list')}</NavLink>
                        <NavLink to="/home">{i18n.t('header.configurator')}</NavLink>
                        <NavLink to="/cart">{i18n.t('header.panier')}</NavLink>
                    </Nav>
                    <ToogleTheme onClick={e => setTheme(theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'})}/>
                    <Logout />
                    <Langue>
                        <BtnLangue onClick={() => i18n.changeLanguage('fr')}>fr</BtnLangue>
                        <BtnLangue onClick={() => i18n.changeLanguage('en')}>en</BtnLangue>
                    </Langue>
                </NavMenu>
                }
                
                
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

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
`

const Nav = styled.div`
    display: flex;
    align-items: center;
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

export default Header