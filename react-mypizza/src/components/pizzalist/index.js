import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {addToCart, fetchPizzas, cart} from '../../actions/cart'
import {connect, useSelector, useDispatch} from 'react-redux'
import bgimg from "../../assets/images/cart.PNG";
import { Link } from 'react-router-dom'
import Pagination from '../Pagination'
import {useTranslation} from 'react-i18next'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";



const PizzaList = ({pizzas, fetchPizzas}) => {
    const {t, i18n} = useTranslation()
    const [searchPizza, setSearchPizza] = useState('')
    const [cartCount, setCartCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [listsPerPage, setListsPerPage] = useState(4)
    const [totalQty, setTotalQty] = useState(0);

    const [isLoading, setLoading] = useState(true)
   
    const dispatch = useDispatch()
    const addToCartBtn = (id) => {
        dispatch(addToCart(id))
        setCartCount(cartCount+1)
    }
    
    useEffect(() => {
        setTimeout(() => {
            fetchPizzas()
            setLoading(false)
        }, 1500)
    }, [])

    const cart = useSelector(state => state.shopCart.cart)
    useEffect(() => {
        let total = 0;
        for (var i = 0; i < cart.length; i++) {
            total = total + cart[i].qty
            setTotalQty(total)
        }
    }, 0)
   
  
    

    const indexOfLastList = currentPage * listsPerPage
    const indexOfFirstList = indexOfLastList - listsPerPage
    const currentList = pizzas.slice(indexOfFirstList, indexOfLastList)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if(isLoading) {
        return(
            <ClipLoader color={"#D34836"} loading={isLoading} css={override} size={50}/>
            )
    }
   

    return (
        <>
        
        <Wrapper>
            <Title>My Pizza</Title>
            <WrapperCart>
            <StyledLink to={`/cart`}>
                <Image></Image>
                <Counter>{totalQty + cartCount}</Counter>
            </StyledLink>
            <StyledInput type="text" placeholder={t('pizzalist.search')} onChange={event => {setSearchPizza(event.target.value)}}></StyledInput>
            
            </WrapperCart>
            
            {currentList.filter((pizza) => {
                if(searchPizza == "") {
                    return pizza
                } else if(pizza.name.toLowerCase().includes(searchPizza.toLowerCase())) {
                    return pizza
                }
                
            }).map((pizza, index) => {
                
                const desc = pizza.description
                const description = desc.replace('<p>','').replace('</p>', '')
                if(pizza.images.length == 0){
                    let src = {'src':'https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
                    pizza.images.push(src)
                }

                return (
                    <>
                    
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
                
                </>
                ) 
            })}
            <Pagination listPerPage={listsPerPage} totalPage={pizzas.length} paginate={paginate}></Pagination>
        </Wrapper>
    </>
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
height: 130px;
align-self: center;
`

const override = css`
  display: block;
  margin: 0 auto;
`;

const StyledInput = styled.input `
font-family: Comic Sans MS, Comic Sans, cursive;
font-weight: 400;
font-size: 14px;
color: #666;
border: 2px solid #d34836;
background: none;
line-height: 1.5;
&:focus{
    border-color: #d34836;
}
`
const Title = styled.h1`
  text-align: center;
  color: #d34836 ;
  margin-top: 30px;
  text-decoration: none;
  padding: 0 1rem;
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
color:#d34836;  
`
const Counter = styled.h3`
font-weight: 600;
font-size: 18px;
line-height: 1.22;
color: #d34836;
position: relative;
top: 25px;
max-width: 105px;
left: 30px;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`
const WrapperButton = styled.div`
display: flex;
flex-direction: column;
`
const Button = styled.button`
align-self: flex-end;
font-weight: bold;
font-size:20px;
border: 1px solid #d34836;
cursor: pointer;
color: #d34836;
background: none;
`

const WrapperImg = styled.img`
margin: 35px 20px 0px 10px;
float: left;
width: 100px;
`
const PizzaTittle = styled.h3`
font-weight: 600;
font-size: 18px;
line-height: 1.22;
color: #d34836;
margin-bottom: 5px;
`
const Desc = styled.p`
font-family: Comic Sans MS, Comic Sans, cursive;
font-weight: 400;
font-size: 14px;
color: #d34836;
line-height: 1.5;
`
const Price = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 1.22;
letter-spacing: -.5px;
color: #d34836;
margin: auto 0 0;
`

const TittleDesc = styled.div`
    display: block;
    margin: 30px 16px 10px 130px;
`

const ListContainer= styled.div`
border: 2px solid #d34836;
border-radius: 2px;
margin: 8px 0;
position: relative;
max-width: 670px;
`



export default connect (mapStateToProps,mapDispatchToProps)(PizzaList);