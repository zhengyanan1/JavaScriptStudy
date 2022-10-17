import { HIDE, SHOW } from './ActionTypes'



export const showAction = (index:number) => {
    return {
        type: SHOW,
        index: index
    }
}

export const hideAction = (index: number) =>{
    return {
        type: HIDE,
        index: index
    }
}