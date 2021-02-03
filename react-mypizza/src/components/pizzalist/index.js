import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {addToCart, fetchPizzas, cart} from '../../actions/cart'
import {connect} from 'react-redux'
import bgimg from "../../assets/images/cart.PNG";


const PizzaList = ({pizzas, fetchPizzas}) => {

<<<<<<< HEAD
    
    
=======
>>>>>>> parent of 2a52e7b4 (recherche)
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
<<<<<<< HEAD
            <GoCart href="/cart">
            <Image></Image>
            <Counter>{cartCount}</Counter>
            </GoCart>
=======
            <StyledLink to={`/cart`}>
                <Image></Image>
                <Counter>{cartCount}</Counter>
            </StyledLink>
>>>>>>> parent of 2a52e7b4 (recherche)
            
            </WrapperCart>
           
            {pizzas.map((pizza, index) => {
<<<<<<< HEAD
                const data = pizza
                const getValueByKey = (key, data) => {
                    var i, len = data.length;
                    
                    for (i = 0; i < len; i++) {
                        if (data[i] && data[i].hasOwnProperty(key)) {
                            return data[i][key];
                        }
                    }
                    
                    return -1;
                }
                console.log(getValueByKey('src', pizza.images));
                console.log(pizza.id)
                const image = getValueByKey('src', pizza.images);
=======
                
>>>>>>> parent of 2a52e7b4 (recherche)
                const desc = pizza.description
                const description = desc.replace('<p>','').replace('</p>', '')

                return (
                <ListContainer>
                    
                    <WrapperImg src={image} />    
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
const GoCart = styled.a `
text-decoration: none;
`

const Image = styled.p `
background-image:url(${bgimg});
width: 60px;
height: 72px;
 background-repeat: no-repeat;
 background-size: cover;
 float: left;
    margin-right: 10px;
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
max-width: 85px;

`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
background: 
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