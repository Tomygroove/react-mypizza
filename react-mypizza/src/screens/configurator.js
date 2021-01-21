import React from 'react';
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

    const Create_pizza =(e,pizzaData)=>{
        e.preventDefault(); 
        axios.post('https://dev.ona-itconsulting.com/pizzasimulator/wp-json/wc/v3/products?consumer_key=ck_3addb4df2eda7ea81545635fc44703f5bd24002a&consumer_secret=cs_c1b54bd4bfda5f69fa0a204f0227d2e0317fa614', {
            name: pizzaData.name,
            regular_price: pizzaData.regular_price,
            description:pizzaData.description,
            images:[{src:"https://dev.ona-itconsulting.com/pizzasimulator/wp-content/uploads/2021/01/mozarella.jpg"}]
          })
          .then(function (response) {
            
            if( response.request.statusText === "Created")
                alert("Pizza créer")
            else
            alert( "erreur de creation de la pizza")

          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <Container>
            <PizzaForm Create_pizza={Create_pizza} ></PizzaForm>
        </Container>
    );
};

export default Configurator;