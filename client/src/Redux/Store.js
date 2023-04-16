import {legacy_createStore as createStore,applyMiddleware} from 'redux'
import AllReducers from './Reducers/CombineReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(AllReducers,composeWithDevTools(applyMiddleware(thunk)))


export default store