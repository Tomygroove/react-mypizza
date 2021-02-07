import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import PizzaList from '../components/pizzalist'
import Header from '../components/header'

const Pizzas = () => {

    return (
        <>
        
        <Header></Header>
        <Container>
            <WrapperHeader>
            </WrapperHeader>
            <PizzaList></PizzaList>
        </Container>
        </>
    );
};

const WrapperHeader = styled.div `
display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

`


export default Pizzas;