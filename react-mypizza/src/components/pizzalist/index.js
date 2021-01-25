import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {addToCart} from '../../actions/cart'
import {connect} from 'react-redux'

const PizzaList = ({pizzas, cart}) => {
    const dispatch = useDispatch()
    const addToCartBtn = (id) => {
        dispatch(addToCart(id))
    }


    const [cartCount, setCartCount] = useState(0)
    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        })
        setCartCount(count)
    }, [cart, cartCount])

    return (
        <Wrapper>  
            <p>Panier : {cartCount}</p>
            {pizzas.map((pizza, index) => { 
                return (
                <ListContainer>
                    <WrapperImg src={pizza.image} width='100px' />    
                    <TittleDesc>  
                    <PizzaTittle>{pizza.name}</PizzaTittle>
                    <Desc>{pizza.description}</Desc>
                    <Price>{pizza.price}€</Price>
                    </TittleDesc>
                    <button onClick={() => addToCartBtn(pizza.id)}>Ajouter</button>          
                </ListContainer>
                ) 
            })}
        </Wrapper>
    );
};


const mapStateToProps = state => {
    return {
        pizzas: state.shopCart.pizzas,
        cart: state.shopCart.cart
    }
}


const Wrapper = styled.div`
display: flex;
flex-direction: column;
`
const WrapperImg = styled.img`
margin: 35px 20px 0px 10px;
float: left;
`
const PizzaTittle = styled.h3`
font-family: Takeaway Sans,Avant Garde,Century Gothic,Helvetica,Arial,sans-serif;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
color: #0a3847;
margin-bottom: 5px;
`
const Desc = styled.p`
font-family: Takeaway Sans,Avant Garde,Century Gothic,Helvetica,Arial,sans-serif;
font-weight: 400;
font-size: 14px;
color: #666;
line-height: 1.5;
`
const Price = styled.p`
font-family: Takeaway Sans,Avant Garde,Century Gothic,Helvetica,Arial,sans-serif;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
letter-spacing: -.5px;
color: #ff8000;
margin: auto 0 0;
`

const TittleDesc = styled.div`
    display: block;
    margin: 30px 16px 10px 130px;
`

const ListContainer= styled.div`
width-max:100%;
border: 4px solid red;
overflow: hidden;
`



export default connect (mapStateToProps)(PizzaList);