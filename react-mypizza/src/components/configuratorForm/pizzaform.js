import React, { useState } from "react"
import {useHistory} from 'react-router-dom'
import styled from "styled-components";
import LoginLogo from "../../assets/images/pizza.png"

const Loginheaderlayout = styled.div`
display: flex;
width:100%;
height:300px;
height:131px;
`
const Logo= styled.div`
width:10%;
text-align: center;

`
const HeaderTitlecontainer =styled.div `
width:80%;
`

const Formcontainer= styled.div `
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Formlogin = styled.form`
display:flex;
flex-direction:column;
width: 412px;
padding:50px 0px 50px 0px;
background:rgba(95,95,95,0.5);
align-items:center;
border-radius:2px;
`

const AvatarContainer = styled.div`
text-align:center;
width:100%;
`

const Loginlayout = styled.div`
padding: 20px 0px 0px 0px;
`
const LogoImg = styled.img `
width: 4em;
margin-bottom:1px;
`
const Logininput = styled.input `
width: 50%;
height: 42px;
color: #000;
font-size: 15px;
font-weight: lighter;;
margin-bottom:10px;
border: 0px;
`

const Label = styled.label `
color:${props=>props.theme.primary_color};
`

const Title=styled.h1`
padding: 0;
margin: 0;
color:#fff;
font-weight: lighter;
`

const Titleconnexion=styled.h1`
padding: 0;
margin: 0;
font-weight: lighter;
color:${props=>props.theme.primary_color};
`

const Description = styled.p`
color:${props=>props.theme.primary_color};
padding: 0;
margin: 0;
`

const PizzaDescriptiontext = styled.textarea`
margin-bottom: 7px;
`

const FileLabel = styled.label `
color:#fff;
`




const PizzaForm = ({Create_pizza})=>{

    const [pizzaData,SetpizzaData] = useState({
        "login":"",
        "password":"",
        "regular_price":"",
        "description":"",
        "image":""
    })
    const history = useHistory()
    return(
        <>
        <Loginheaderlayout>
            <HeaderTitlecontainer>
                <Title>CREER SA PROPRE PIZZA</Title>
                <Description>Sur cette page vous pouvez ajouter votre pizza</Description>
            </HeaderTitlecontainer>
            </Loginheaderlayout>
            <Loginlayout>
                
                <Formcontainer>
                    <Formlogin onSubmit={(e)=>Create_pizza(e,pizzaData)}>
                        <Titleconnexion>
                        <Logo>
                    <LogoImg src={LoginLogo}/>
                </Logo>
                        </Titleconnexion>
                        <Logininput type="text" name="name" placeholder="intitulé" onChange ={e=>SetpizzaData({...pizzaData,name:e.target.value})}/>
                        <Logininput type="text" name="regular_price" placeholder="prix" onChange ={e=>SetpizzaData({...pizzaData,regular_price:e.target.value})} disabled={false}/>
                        <div>
                            <label>Sauce tomate</label>
                            <input type="checkbox" name="ingredient1"/>
                            <label>Sauce tomate</label>
                            <input type="checkbox" name="ingredient1"/>
                            <label>Sauce tomate</label>
                            <input type="checkbox" name="ingredient1"/><br/>
                            <label>Sauce tomate</label>
                            <input type="checkbox" name="ingredient1"/>
                            <label>Sauce tomate</label>
                            <input type="checkbox" name="ingredient1"/>
                            <label>Sauce tomate</label>
                            <input type="checkbox" name="ingredient1"/>



                        </div>
                        <Logininput type="submit" value="Créer"/>
                    </Formlogin>
                </Formcontainer>
            </Loginlayout>
        </>
    )
}


export default PizzaForm;