import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {addToCart, fetchPizzas, cart} from '../../actions/cart'
import {connect} from 'react-redux'
import bgimg from "../../assets/images/cart.PNG";
import { Link } from 'react-router-dom'



const PizzaList = ({pizzas, fetchPizzas}) => {

    const [cartCount, setCartCount] = useState(0)
    const dispatch = useDispatch()
    const addToCartBtn = (id) => {
        dispatch(addToCart(id))
        setCartCount(cartCount+1)
    }
    useEffect(() => {
        fetchPizzas()
    }, [])

    return (
        <Wrapper>
            <WrapperCart>
            <StyledLink to={`/cart`}>
                <Image></Image>
                <Counter>{cartCount}</Counter>
            </StyledLink>
            
            </WrapperCart>
           
            {pizzas.map((pizza, index) => {
                
                const desc = pizza.description
                const description = desc.replace('<p>','').replace('</p>', '')
                if(pizza.images.length == 0){
                    let src = {'src':'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
                    pizza.images.push(src)
                }

                return (
                <ListContainer key={pizza.id}>
                    
                    <WrapperImg src={pizza.images[0].src} />    
                    <TittleDesc>  
                    <PizzaTittle>{pizza.name}</PizzaTittle>
                    <Desc>{description}</Desc>
                    <Price>{pizza.price}€</Price>
                    </TittleDesc>
                    <WrapperButton>
                    <Button onClick={() => addToCartBtn(pizza.id)}>+</Button>   
                    </WrapperButton>
                           
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

const mapDispatchToProps = dispatch => {
    return {
        fetchPizzas: () => dispatch(fetchPizzas())
    }
}
const WrapperCart = styled.div `
max-width: 100%;
height: 80px;
`
const StyledLink = styled(Link) `
text-decoration: none;
`

const Image = styled.p `
background-image:url(${bgimg});
width: 50px;
height: 72px;
 background-repeat: no-repeat;
 background-size: cover;
 float: left;
    clear:both;
  
`
const Counter = styled.h3`
font-family: Takeaway Sans,Avant Garde,Century Gothic,Helvetica,Arial,sans-serif;
font-weight: 600;
font-size: 18px;
line-height: 1.22;
color: #0a3847;
position: relative;
top: 25px;
max-width: 105px;
left: 30px
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;

`
const WrapperButton = styled.div`
display: flex;
flex-direction: column;
`
const Button = styled.button`
align-self: flex-end;
font-weight: bold;
font-size:20px;
border: 2px solid #ebebeb;
cursor: pointer;
`

const WrapperImg = styled.img`
margin: 35px 20px 0px 10px;
float: left;
width: 100px;
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
font-family: Comic Sans MS, Comic Sans, cursive;
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
border: 2px solid #ebebeb;
border-radius: 2px;
margin: 8px 0;
position: relative;
`



export default connect (mapStateToProps,mapDispatchToProps)(PizzaList);