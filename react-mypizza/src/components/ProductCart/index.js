import React, {useState, useEffect} from 'react'
import styled from "styled-components"




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



const ProductList = props => {

    let [qty, setQty] = useState(props.qty)

    const incrementQty = () => {
        setQty(qty++);
    }
    const decrementQty = () => {
        setQty(qty--);
    }
    return (
        <tr>
            <Column>
                <StyledImg src={props.img}></StyledImg>
            </Column>
            <Column>{props.name}</Column>
            <Column> 
                <button onClick={decrementQty}>-</button>
                    {qty}
                <button onClick={incrementQty}>+</button></Column>
            <Column>{props.price}€</Column>
            <Column>{props.price * props.qty}€</Column>
            <Column>
                <button onClick={testClick}>Supprimer</button>
            </Column>
        </tr>
    );
};

export default ProductList;