import {combineReducers} from 'redux'
import Cart from './cart'
import Step from './stepper'

export default combineReducers({
    shopCart : Cart,
    step:Step,
})