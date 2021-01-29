import React, {useState, useEffect} from 'react'
import styled from "styled-components"

import {useDispatch} from 'react-redux'
import {removeFromCart, addToCart, decrementQty } from '../../actions/cart'





const ProductList = props => {
    let [qty, setQty] = useState(props.qty)

    const dispatch = useDispatch()
    const increment = () => {

        setQty(qty+ 1);
        dispatch(addToCart(props.id))
    }
    const decrement= () => {
        dispatch(decrementQty(props.id))
        setQty(qty- 1);
    }
    return (
        // <tr>
        //     <Column>
        //         <StyledImg src={props.img}></StyledImg>
        //     </Column>
        //     <Column>{props.name}</Column>
        //     <Column> 
        //         <button onClick={decrement}>-</button>
        //             {qty}
        //         <button onClick={increment}>+</button></Column>
        //     <Column>{props.price}€</Column>
        //     <Column>{props.price * props.qty}€</Column>
        //     <Column>
        //         <button onClick={() => dispatch(removeFromCart(props.id))}>Supprimer</button>
        //     </Column>
        // </tr>
        <CartProductsCardContainer>
            <OneProductContainer>
                <StyledImg src={props.img}></StyledImg>
                <InfoProductContainer>

                <p>{props.name}</p>
                <div>
                    quantité : 
                        <button onClick={decrement}>-</button>
                            {qty}
                        <button onClick={increment}>+</button>
                </div>
                <div>
                total :{props.price * props.qty}€
                </div>
                <div>
                <button onClick={() => dispatch(removeFromCart(props.id))}>Supprimer</button>
                </div>
                </InfoProductContainer>
            </OneProductContainer>   
        </CartProductsCardContainer>
    );
};
const OneProductContainer = styled.div`
    width: 100%;
    height: 25vh;
    background:white;
    display: flex;

`
const InfoProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2vh 2vw;
`
const CartProductsCardContainer = styled.div`
    width:45%;
    display: flex;
    margin: 2vh 2.5%;
    
`


const Column = styled.td`
width: calc(100%/5);
height:20vh;
text-align:center;

`

const StyledImg = styled.img`
height:95%;
width: 35%;
margin: 1% 1% ;
`
const testClick = (e, cart) => {
    alert(cart);
}

export default ProductList;