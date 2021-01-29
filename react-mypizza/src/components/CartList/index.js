import React, {useState, useEffect} from 'react'

import styled from "styled-components"
import ProductCart from '../ProductCart'
import StripeCheckout from 'react-stripe-checkout'




const Container = styled.div`
    width:100%;
    height:100vh;
    margin:0px;
    overflow: auto;
    display:flex;
    padding-top:20px;
    flex-direction:column;
    background: #E5E5E5;
`
const Title = styled.h1`
    text-align: center;
`
const CartContainer = styled.div `

    margin: 5% 10%;
    border-bottom: 1px solid black;
    border-top: 1px solid black;

`

const Column = styled.td`
    width: calc(100%/5);
    height:20vh;
    text-align:${(props) => props.right? "right" : "center"};

`

const Table = styled.table`
    width:100%;
`



const CartList = props => {

    const [cart, setCart] = useState([
        {id:1, img: "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",name: "Margharita", qty: 2, price: 7.99},
        {id:7, img: "https://images.pexels.com/photos/1082343/pexels-photo-1082343.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",name: "Regina", qty: 1, price: 11.99},
        {id:6, img: "https://images.pexels.com/photos/3944308/pexels-photo-3944308.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name: "Peperoni", qty: 4, price: 10.99},
        {id:3, img: "https://images.pexels.com/photos/4193872/pexels-photo-4193872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",name: "Végétarienne", qty: 2, price: 16.99},
    ])
    let [total, setTotal] = useState(0);

    useEffect(()=>{
        cart.forEach(product => {
            let totalProduct = product.price * product.qty;
            setTotal(total += totalProduct)
            
        });

    }, [])
    const handleToken = (token, adresses) => {
        console.log({token , adresses})
    }
    return (
        <Container>
            <Title>Votre panier</Title>
            <CartContainer>
            <Table>
                    <thead>
                        <tr>
                            <Column></Column>
                            <Column>Pizza</Column>
                            <Column>Quantité</Column>
                            <Column>Prix unitaire</Column>
                            <Column>Prix total</Column>
                            <Column></Column>
                        </tr>
                    </thead>
                    <tbody>
                    {cart.map(product => 
                        <ProductCart 
                            price= {product.price} 
                            img = {product.img} 
                            name = {product.name} 
                            qty={product.qty}
                            
                            >

                            </ProductCart>
                    
                    )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <Column right colSpan="4">Total:</Column>
                            <Column >{total.toFixed(2)}€</Column>
                            <Column >
                                <StripeCheckout 
                                stripeKey="pk_test_51HqFjsLExcHBUVQnWuGRxHmsg1wX31Duka1ZqhgovRtSaS22aUPnURuK3IY34zc7cpadks9N4ViWiFK2XsHSTuLk00PjxQ6fyv"
                                token={handleToken}
                                billingAddress
                                shippingAddress
                                amout= {total.toFixed(2)}
                                >
                                    <button>Acheter maintenant</button>
                                </StripeCheckout>
                            </Column>
                        </tr>
                    </tfoot>
                </Table>
            </CartContainer>
        </Container>
    );
};

export default CartList;