import React from 'react';


import styled from 'styled-components'
import PizzaList from '../components/pizzalist'

const Pizzas = () => {
    return (
        <Container>
            <Tittle>Liste des Pizzas</Tittle>
            <PizzaList></PizzaList>
        </Container>

    );
};

const Tittle = styled.h1 `
    color:black;
`

const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`


export default Pizzas;