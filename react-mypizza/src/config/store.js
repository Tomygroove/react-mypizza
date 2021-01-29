<<<<<<< HEAD
import {createStore} from 'redux'
import reducers from '../reducers'

export const store = createStore(reducers)
=======
import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


export const store = createStore(reducers, applyMiddleware(logger, thunk))
>>>>>>> 2a52e7b412488380965f2588ac08533e3afe83c9
