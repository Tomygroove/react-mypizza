export const CURRENT_STEP ='CURRENT_STEP'
export const CH_BASE = 'CH_BASE'
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const CH_SIZE = 'CH_SIZE'
export const DELETEINGREDIENTS = 'DELETEINGREDIENTS'

export const Nextstep= initial=>({
    type:CURRENT_STEP,
    payload:{
        step:initial
    }
})

export const Updatesize= Newbase=>({
    type:CH_SIZE,
    payload:{
        PizzaSize:Newbase
    }
})


export const UpdateBase= Newbase=>({
    type:CH_BASE,
    payload:{
        base:Newbase
    }
})


export const SetIngredients= NewIngredients=>({
    type:SET_INGREDIENT,
    payload:{
        Ingredients:NewIngredients
    }
})

export const DeleteIngredients= id =>({
    type:DELETEINGREDIENTS,
    payload:{
            Id: id,
    }
})

