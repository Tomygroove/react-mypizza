import React from 'react';
import styled from 'styled-components'
import PizzaList from '../components/pizzalist'
import bgimg from "../assets/images/pizzaback.PNG";
import Header from '../components/header'


const Pizzas = () => {
    return (
    <div>
        <Header></Header>
        <Container>
            
            <WrapperHeader>
            <Image/>
            </WrapperHeader>
            <PizzaList></PizzaList>
        </Container>
    </div>
    );
};

const WrapperHeader = styled.div `
width: 1185px;
height:200px;
display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img `
background-image:url(${bgimg});
width: 100%; 
 height:250px; 
 
 background-repeat: no-repeat;
 background-size: cover;
`

const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`


export default Pizzas;