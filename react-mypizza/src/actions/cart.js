import axios from '../../node_modules/axios'

export const GET_DATA_REQUEST = 'GET_DATA_REQUEST'
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS'
export const GET_DATA_ERROR = 'GET_DATA_ERROR'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const INCREMENT_QTY = 'INCREMENT_QTY'
export const DECREMENT_QTY = 'DECREMENT_QTY'
export const GET_CART = "GET_CART"


export const fetchPizzas = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest)
        axios.get('https://dev.ona-itconsulting.com/pizzasimulator/wp-json/wc/v3/products?consumer_key=ck_3addb4df2eda7ea81545635fc44703f5bd24002a&consumer_secret=cs_c1b54bd4bfda5f69fa0a204f0227d2e0317fa614')
        .then(res => {
            console.log(res)
            const pizzas = res.data
            dispatch(fetchDataSuccess(pizzas))            
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchDataError(errorMsg))
        })
    }
}

export const getCart = () => ({
    type: GET_CART
})

export const fetchDataRequest = () => ({
    type: GET_DATA_REQUEST
})

export const fetchDataSuccess = pizzas => ({
    type: GET_DATA_SUCCESS,
    payload: pizzas
})

export const fetchDataError = error => ({
    type: GET_DATA_ERROR,
    payload: error
})

export const addToCart = pizzaID => ({
    type: ADD_TO_CART,
    payload: {
        id: pizzaID
    }
})

export const removeFromCart = pizzaID => ({
    type: REMOVE_FROM_CART,
    payload: {
        pizzaID
    }
})

export const incrementtQty = (pizzaID) => ({
    type: INCREMENT_QTY,
    payload: {
        id: pizzaID,
    }
})
export const decrementQty = (pizzaID) => ({
    type: DECREMENT_QTY,
    payload: {
        id: pizzaID,
    }
})