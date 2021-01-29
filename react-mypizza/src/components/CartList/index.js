import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components"
import ProductCart from '../ProductCart'
import StripeCheckout from 'react-stripe-checkout'


const CartList = props => {

    const cart = useSelector(state => state.shopCart.cart )
    const qtyInCart = useSelector(state => state.shopCart.qtyInCart )
    

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

    if(cart.length != 0){
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
                                key= {product.id}
                                id = {product.id}
                                price= {product.price} 
                                img = {product.images[0].src} 
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
    }
    else{
        return (
            <Container>
                <Title>Votre panier</Title>
                <CartContainer>
                    <Text>Votre panier est vide ...</Text>
                </CartContainer>
            </Container>
        );
    }
    
};

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
const Text = styled.p`
    text-align: center;

`
export default CartList;