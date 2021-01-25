import React from 'react';
import data from '../../assets/data/pizzas.json'
import styled from "styled-components";

const PizzaList = () => {
    console.log(data)
    return (
        <Wrapper>
            {data.map((pizza, index) => { 
                return (
                <ListContainer>
                    <img src={pizza.image} width='100px' />     
                    <h>{pizza.name}</h>
                </ListContainer>
                ) 
            })}
        </Wrapper>
    );
};
const Wrapper = styled.div`

`
const ListContainer= styled.div`
display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  column-count: 2;
  column-gap: 0;
  

`



export default PizzaList;