import React, {useState, useEffect} from 'react'
import styled from "styled-components"

import {useDispatch} from 'react-redux'
import {removeFromCart, addToCart, decrementQty } from '../../actions/cart'





const ProductList = props => {
    let [qty, setQty] = useState(props.qty)

    const dispatch = useDispatch()
    return (
        <tr>
            <Column>
                <StyledImg src={props.img}></StyledImg>
            </Column>
            <Column>{props.name}</Column>
            <Column> 
                <button onClick={() => dispatch(decrementQty(props.id))}>-</button>
                    {qty}
                <button onClick={() => dispatch(addToCart(props.id))}>+</button></Column>
            <Column>{props.price}€</Column>
            <Column>{props.price * props.qty}€</Column>
            <Column>
                <button onClick={() => dispatch(removeFromCart(props.id))}>Supprimer</button>
            </Column>
        </tr>
    );
};
const Column = styled.td`
width: calc(100%/5);
height:20vh;
text-align:center;

`

const StyledImg = styled.img`
height:90%;
width: 90%;
`
const testClick = (e, cart) => {
    alert(cart);
}

export default ProductList;