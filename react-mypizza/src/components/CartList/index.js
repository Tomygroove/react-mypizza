import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import styled from "styled-components"
import ProductCart from '../ProductCart'
import StripeCheckout from 'react-stripe-checkout'
import { NavLink as Link} from 'react-router-dom';

const CartList = props => {
    
    const cart = useSelector(state => state.shopCart.cart )
    const qtyInCart = useSelector(state => state.shopCart.qty )
    console.log(cart);
    

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
                       
                </CartContainer>
                <CartFooterContainer>
                    <StyledLink to="/pizzas">retourner faire mes achats</StyledLink>
                    <StripeCheckout 
                        stripeKey="pk_test_51HqFjsLExcHBUVQnWuGRxHmsg1wX31Duka1ZqhgovRtSaS22aUPnURuK3IY34zc7cpadks9N4ViWiFK2XsHSTuLk00PjxQ6fyv"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amout= {total.toFixed(2)}
                        >
                        <StyledBtn>Acheter maintenant</StyledBtn>
                    </StripeCheckout>

                </CartFooterContainer>
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
const StyledBtn = styled.button`
    color:#d34836;
    border-radius:2px;
    border:1px solid #d34836 ;
    height: 5vh;
    cursor: pointer;
`
const CartFooterContainer = styled.div`
    margin: 0% 12.5%;
    display: flex;
    justify-content: space-between;
    align-items:center;

`
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
    font-family: 'Carter One', cursive;
`
const CartContainer = styled.div `

    display:flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 5% 10%;
 

`
const StyledLink = styled(Link)`
    color: #d34836;
    text-decoration:none;
    
`

const Text = styled.p`
    text-align: center;

`
export default CartList;