import { CURRENT_STEP } from "../actions/stepper";
import { CH_BASE, SET_INGREDIENT,CH_SIZE,DELETEINGREDIENTS } from "../actions/stepper";
import {IngredientsListe} from "../assets/data/Ingredients"
import {Pizzasize} from "../assets/data/Pizzasize"
import {BaseListe} from "../assets/data/base"


const initialState = {
    First_step:true,
    Second_step:false,
    Third_step:false,
    current_step:1,
    IngredientsListes:IngredientsListe.Liste,
    Pizzasize:Pizzasize.Liste,
    Base:BaseListe.Liste,

    IngredientsBasket:[],
    SizeBasket:"",
    BaseListi:{},
    price:0,
    

}

const DeletTodo=(List,payload)=>{
    const NewList = List.filter(elt=>elt.id!==payload.Id)
    return NewList
}


export default (state = initialState, action) => {
    switch(action.type){
        case CURRENT_STEP:
            return {
       ...state,First_step:action.payload.step===1?true:false,
                Second_step:action.payload.step===2?true:false,
                Third_step:action.payload.step===3?true:false,
                current_step:action.payload.step,
               }
        case CH_SIZE:
            return {...state,SizeBasket:action.payload.PizzaSize }
        case CH_BASE:
            return {...state,BaseListi:action.payload.base }
        case SET_INGREDIENT:
            return {...state,IngredientsBasket:[...state.IngredientsBasket,action.payload.Ingredients] }
        case DELETEINGREDIENTS:
            return {...state,IngredientsBasket:DeletTodo(state.IngredientsBasket,action.payload)}
            default:
                return state
    }
}