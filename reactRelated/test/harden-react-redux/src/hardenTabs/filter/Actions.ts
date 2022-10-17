import { FILTER } from './ActionTypes'



export const filterAction = (filterCondition:boolean) => {
    return {
        type: FILTER,
        value: filterCondition
    }
}