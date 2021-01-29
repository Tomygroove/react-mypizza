import React, { useEffect, useState } from 'react';
import PizzaForm from "../components/configuratorForm/pizzaform"
import bgimg from "../assets/images/configuratorbg.jpg";
import styled from "styled-components"
import axios from "axios"


const Container = styled.div`
width:100%;
height:100vh;
margin:0px;
overflow: auto;
display:flex;
padding-top:20px;
flex-direction:column;
background-image:url(${bgimg});
background-repeat: no-repeat;
background-size: cover;
`



const Configurator = () => {

  const [Ingredients, SetIngredients] = useState([])
  
  useEffect(()=>{
    GetIngredients();
   },[])


   const GetIngredients = ()=>{
    axios
    .get('https://dev.ona-itconsulting.com/pizzasimulator/wp-json/wc/v3/products?consumer_key=ck_3addb4df2eda7ea81545635fc44703f5bd24002a&consumer_secret=cs_c1b54bd4bfda5f69fa0a204f0227d2e0317fa614')
    .then(response => {
        SetIngredients(response.data)
        console.log( response.data)
    })

   } 

    const Create_pizza =(e,pizzaData)=>{
        
        console.log( pizzaData )
        alert( "hhhhhhhhhhhh")
        e.preventDefault(); 
        axios({
          method: 'post',
          url: 'https://dev.ona-itconsulting.com/pizzasimulator/wp-json/wc/v3/products?consumer_key=ck_3addb4df2eda7ea81545635fc44703f5bd24002a&consumer_secret=cs_c1b54bd4bfda5f69fa0a204f0227d2e0317fa614',
          data: {
            name: 'Fred',
            description: 'Flintstone',
            regular_price:'300',
            type:'pizza',
            short_description:'short description'
          }
        }).then(function (response) {
          console.log( response )
        })

    }
    return (
        <Container>
            <PizzaForm Create_pizza={Create_pizza}  ingredients={Ingredients}></PizzaForm>
        </Container>
    );
};

export default Configurator;