import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import styled from "styled-components"
import ProductCart from '../ProductCart'
import StripeCheckout from 'react-stripe-checkout'
import { NavLink as Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const CartList = props => {
    const {t, i18n} = useTranslation()
    const cart = useSelector(state => state.shopCart.cart )
    const qtyInCart = useSelector(state => state.shopCart.qty )
    const [isLoading, setLoading] = useState(true)
    
    console.log(cart);
    let [total, setTotal] = useState(0);

    useEffect(()=>{
        setTimeout(() => {
            cart.forEach(product => {
                let totalProduct = product.price * product.qty;
                setTotal(total += totalProduct)
            });
            setLoading(false)
        }, 1000)
    }, [])
    const handleToken = (token, adresses) => {
        console.log({token , adresses})
    }
    cart.map(product => 
        product.description = product.description.replace('<p>','').replace('</p>', '')
    
    )

    if(isLoading) {
        return(<ClipLoader color={"#D34836"} loading={isLoading} css={override} size={50}/>)
    }

    if(cart.length != 0){
        return (
            <Container>
                <Title>{i18n.t('cart.titre')}</Title>
                <CartContainer>
                
                        {cart.map(product => 
                            <ProductCart 
                                key= {product.id}
                                id = {product.id}
                                price= {product.price} 
                                img = {product.images[0].src} 
                                name = {product.name} 
                                qty={product.qty}
                                description={product.description}
                                
                                >
    
                            </ProductCart>
                        
                        )}
                       
                </CartContainer>
                <CartFooterContainer>
                    <StyledLink to="/pizzas">{i18n.t('cart.retourList')}</StyledLink>
                    <StripeCheckout 
                        stripeKey="pk_test_51HqFjsLExcHBUVQnWuGRxHmsg1wX31Duka1ZqhgovRtSaS22aUPnURuK3IY34zc7cpadks9N4ViWiFK2XsHSTuLk00PjxQ6fyv"
                        token={handleToken}
                        billingAddress
                        shippingAddress
                        amout= {total.toFixed(2)}
                        >
                        <StyledBtn>{i18n.t('cart.achat')}</StyledBtn>
                    </StripeCheckout>

                </CartFooterContainer>
            </Container>
                        
        );
    }
    else{
        return (
            <Container>
                <Title>{i18n.t('cart.titre')}</Title>
                <CartContainer>
                    <Text>{i18n.t('cart.emptyMsg')}</Text>
                </CartContainer>
                <CartFooterContainer>
                    <StyledLink to="/pizzas">{i18n.t('cart.retourList')}</StyledLink>
                </CartFooterContainer>
            </Container>
        );
    }
    
};
const StyledBtn = styled.button`
    color: white;
    border-radius:2px;
    border:1px solid #d34836 ;
    height: 3.5vh;
    cursor: pointer;
    background: none;
    &:hover{
        background: #d34836;
        color:white;
    }
`

const override = css`
  display: block;
  margin: 0 auto;
`;

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
`
const Title = styled.h1`
    text-align: center;
    font-family: 'Carter One', cursive;
    color: #d34836;
`
const CartContainer = styled.div `

    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 5% 10%;
    color: #d34836;
 

`
const StyledLink = styled(Link)`
    color: #d34836;
    text-decoration:none;
    &:hover{
        border-bottom: 1px solid #d34836;
    }
    
`

const Text = styled.p`
    text-align: center;

`
export default CartList;