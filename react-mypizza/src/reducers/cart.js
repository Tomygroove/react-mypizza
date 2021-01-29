import {ADD_TO_CART, INCREMENT_QTY, DECREMENT_QTY , GET_DATA_ERROR, GET_DATA_REQUEST, GET_DATA_SUCCESS, REMOVE_FROM_CART, GET_CART} from '../actions/cart'



const initialState = {
    loading: false,
    pizzas: [],
    cart: localStorage.getItem('cart')? JSON.parse(localStorage.getItem('cart')): [],
}

// eslint-disable-next-line import/no-anonymous-default-export
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
                cart: [],
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
            const inCart = state.cart.find(item => item.id == action.payload.id)
            if(inCart != undefined) {
                state.cart.map(item => item.id == action.payload.id ? item.qty ++ : item = item.qty)
                console.log(state.cart)

            } else {
                item.qty = 1
                state.cart.push(item)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
            return{
                ...state,
                cart: state.cart
            }

        case REMOVE_FROM_CART:
            let newCart = state.cart.filter((item) => item.id != action.payload.pizzaID)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return{
                ...state,
                cart: newCart      
            }
        
        case INCREMENT_QTY:
            state.cart.map(item => item.id === action.payload.id ? item.qty ++ : item.qty = 1)
            let newQty = state.cart
            localStorage.setItem('cart', JSON.stringify(newQty))

            return{
                ...state,
                cart: newSty
            }
        case DECREMENT_QTY:
            console.log(action)
            state.cart.map(item => item.id === action.payload.id ? item.qty -- : item.qty = item.qty)
            let newSty = state.cart
            localStorage.setItem('cart', JSON.stringify(newSty))

            return{
                ...state,
                cart: newSty
            }
        default:
            return state

    }
}