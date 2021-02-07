import React, {useState, useEffect} from 'react'
import { NavLink as Link} from 'react-router-dom'
import styled from 'styled-components'
import Logout from '../logout'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import storage from 'local-storage-fallback'
import toggleImage from '../../assets/images/themetoggle.png'


import {useTranslation} from 'react-i18next'

const Mobile = () => {
    const {t, i18n} = useTranslation()
    
    const [active,setActive] = useState(false)

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

                <MobileBtn onClick={() => {
                    setActive(!active);
                }}>
                    {active ? "" : ""} Menu
                </MobileBtn>
                {active && 

                <NavMenu>
                        <NavLink to="/pizzas">{i18n.t('header.list')}</NavLink>
                        <NavLink to="/home">{i18n.t('header.configurator')}</NavLink>
                        <NavLink to="/cart">{i18n.t('header.panier')}</NavLink>
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


const MobileBtn = styled.button`
    float: right;
    margin-right: 15px;
    margin-top: 20px;
    color: white;
    background: none;
    border-radius:2px;
    border:1px solid #d34836 ;
    height: 3.5vh;
    cursor: pointer;
    &:hover{
      background: #d34836;
  }
`

const HeaderContainer = styled.div`
justify-content: center;
flex-direction: column;
life-style: none;
width:100%;
margin-left: 20%;
background: #191919;
`

const NavMenu = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
width:100%;
margin-top: 0;
margin-left: 0;
background: #191919;
height: auto;
`

const Nav = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 10px;
    width: 100%;
    top: 50%;
`

const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
flex-direction: column;
padding: 0 1rem;
cursor: pointer;
&.active {
    color: #d34836;
}
`

export default Mobile