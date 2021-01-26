import {ADD_TO_CART, ADJUST_QTY, GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS, REMOVE_FROM_CART} from '../actions/cart'



const initialState = {
    loading: false,
    pizzas: [],
    cart: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_DATA_REQUEST:
            return{
                ...state,
                loading: true
            }
        case GET_DATA_SUCCESS:
            return{
                loading: false,
                pizzas: action.payload,
                cart:[],
                error: ''
            }
        case GET_DATA_ERROR:
            return{
                loading: false,
                pizzas: [],
                error: action.payload
            }
        case ADD_TO_CART:
            const item = state.pizzas.find(pizza => pizza.id === action.payload.id)
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false)
            return{
                ...state,
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) :
                [...state.cart, {...item, qty: 1}],
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)         
            }
        case ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: action.payload.qty} : item)
            }
        default:
            return state

    }
}