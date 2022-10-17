import { connect } from 'react-redux'
import { filterAction } from './filter/Actions'




export function Filter(
    {filterStatus, filterTrue, filterNothing}:{
        filterStatus:boolean,
        filterTrue: Function,
        filterNothing: Function
    }){
    return (<button onClick={()=>{filterStatus ? filterNothing() : filterTrue()}}>{`Filter:${filterStatus}`}</button>)
}

function mapStateToProps(state: any, ownProps: any){
    return {
        filterStatus: state.filter
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any){
    return {
        filterTrue: ()=>{
            dispatch(filterAction(true))
        },
        filterNothing: ()=>{
            dispatch(filterAction(false))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)









