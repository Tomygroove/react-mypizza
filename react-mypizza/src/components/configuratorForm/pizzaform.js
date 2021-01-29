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




const PizzaForm = ({Create_pizza,ingredients})=>{

    const [pizzaData,SetpizzaData] = useState({
        
        "regular_price":0,
        "description":"",
        "name":""
    })

    const [IngredientsListes, SetIngredientsListes] = useState([])

    const TargetHandle =( e,ing)=>{

        if (e.target.checked){
            let priceinit = parseInt((pizzaData.regular_price?pizzaData.regular_price:0));
            let pricefinal = parseInt((ing.regular_price?ing.regular_price:0));
            let finalpricei = priceinit + pricefinal;
            SetpizzaData({...pizzaData,regular_price:0})

           
            IngredientsListes.push({name:ing.name})
      
            
        }else
        {

            let priceinit = parseInt((pizzaData.regular_price?pizzaData.regular_price:0));
            let pricefinal = parseInt((ing.regular_price?ing.regular_price:0));
            let finalpricei = priceinit - pricefinal;
            const newTodos = IngredientsListes.filter(todo => todo.name !== ing.name)
            SetIngredientsListes(newTodos) 
            SetpizzaData({...pizzaData,regular_price:0})
           

          
        }
            




        

    }




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
                        </Titleconnexion>
                        <Logininput type="text" name="name" placeholder="intitulé" onChange ={e=>SetpizzaData({...pizzaData,name:e.target.value})}/>
                        <Logininput type="text" name="regular_price" placeholder="prix" onChange ={e=>SetpizzaData({...pizzaData,regular_price:e.target.value})} value={pizzaData.regular_price} readOnly/>
                        <div style={{color:'#fff'},{display:'flex'}}>
                           <div style={{color:'#fff'},{display:'flex'}}>
                            <h1 style={{color:'#fff'}}>Ingrédients</h1>
                            </div>
                            {
                                <div style={{color:'#fff'},{display:'flex'}}>
                                    {
                                ingredients.map( ingredient =>
                                    <span key={ingredient?.id} style={{color:'#fff'},{display:'flex'}}>
                                        <input type="checkbox" name="ingredient" value={ingredient.id} onClick ={(e)=>TargetHandle(e,ingredient)}/>
                                        <label>{ingredient.name}</label>
                                    </span>
                                )
                            }
                                </div>
                            }
                            
                        </div>
                        <Logininput type="submit" value="Créer"/>
                    </Formlogin>
                </Formcontainer>
            </Loginlayout>
        </>
    )
}


export default PizzaForm;