export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADJUST_QTY = 'ADJUST_QTY'

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

export const adjustQty = (pizzaID, value) => ({
    type: ADJUST_QTY,
    payload: {
        id: pizzaID,
        qty: value
    }
})