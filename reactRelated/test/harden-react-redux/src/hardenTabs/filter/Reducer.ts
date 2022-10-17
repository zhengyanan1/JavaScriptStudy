import { FILTER } from './ActionTypes';


export const reducer = (state = false, action: any) =>{
    switch(action.type){
        case FILTER:
            return action.value
        default: 
            return state
    }
}