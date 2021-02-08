import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import {useTranslation} from 'react-i18next';
import {removeFromCart, incrementtQty, decrementQty} from '../../actions/cart'
import {connect, useSelector, useDispatch} from 'react-redux'


const ProductList = props => {
    let [qty, setQty] = useState(props.qty)
    let [total, setTotal] = useState(props.price * props.qty)
    const dispatch = useDispatch()
    const RemovePizza = (id) => {
        dispatch(removeFromCart(id))
    }
    const {t, i18n} = useTranslation()


    const incrQty = (id) => {
        if(qty >= 1)
        dispatch(incrementtQty(id))
        setQty(qty++);
    }
    const decrQty = (id) => {
        if(qty > 1){
            dispatch(decrementQty(id))
            setQty(qty--);
        }
    }

    return (
        <ProductContainer>
            <ImgContainer>
                <StyledImg src={props.img}></StyledImg>
            </ImgContainer>
            <InfoContainer>
                <PizzaTittle>{props.name}</PizzaTittle>
                <Desc>{props.description}</Desc>
                <Desc>
                    <StyledBtn onClick={() => decrQty(props.id)}>-</StyledBtn>
                        {qty}
                    <StyledBtn onClick={() => incrQty(props.id)}>+</StyledBtn>
                </Desc>
                <FooterCardContainer>
                    <DescPrice>total: {total}€</DescPrice>
               
                    <StyledBtn onClick={() => RemovePizza(props.id)}>{i18n.t('productcart.supprimer')}</StyledBtn>
       
                </FooterCardContainer>
            </InfoContainer>
        </ProductContainer>
    );
};
const ProductContainer = styled.div`
    width: 70%;
    height: 25vh;
    background: #191919;
    margin: 2.5vh 0;
    border: 2px solid #d34836;

`
const ImgContainer = styled.div`
    width: 25%;
    height: 100%;
    float: left;
    
    `
const StyledImg = styled.img`
    width: 80%;
    height: 80%;
    margin: 10% 10%;
    object-fit:contain;
    
    
`
const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    
`
const PizzaTittle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    color: #d34836;
    margin: 2vh 0vw 2vh 15vw;
    
`
const Desc = styled.p`
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: 400;
    font-size: 14px;
    color: #d34836;
    line-height: 1.5;
    margin: 1vh 0vw 1vh 15vw;
`
const StyledBtn = styled.button`
    margin : 0 0.5vw;
    color: white;
    border: 1px solid #d34836;
    background: none;
    &:hover{
        background: #d34836;
        color:white;
    }
`
const DescPrice = styled.p`
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-weight: 400;
    font-size: 14px;
    color: #d34836;
    margin: 1vh 1.25vw;
`
const FooterCardContainer = styled.div`
    display:flex;
    justify-content: space-between;
    
`
export default ProductList;