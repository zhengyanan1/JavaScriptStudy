import {combineReducers, createStore} from 'redux'
import { reducer as tabReducer } from './tabs/Reducer'
import { reducer as filterReducer } from './filter/Reducer'

const reducer = combineReducers({
    tabs: tabReducer,
    filter: filterReducer
})

export const store = createStore(reducer)
