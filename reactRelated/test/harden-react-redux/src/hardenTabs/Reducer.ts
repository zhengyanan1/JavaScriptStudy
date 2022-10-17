import { HIDE, SHOW } from './ActionTypes';


export const reducer = (state = [false, false], action: any) =>{
    let newstate;
    switch(action.type){
        case SHOW:
            newstate = [...state]
            newstate[action.index] = true
            return newstate
        case HIDE:
            newstate = [...state]
            newstate[action.index] = false
            return newstate
        default: 
            return state
    }
}