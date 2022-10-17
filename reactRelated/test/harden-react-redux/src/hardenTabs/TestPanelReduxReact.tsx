import { CSSProperties } from 'react'
import { connect } from 'react-redux'
import  Filter  from './Filter'
import MyButton from './MyButton'

let rootStyle: CSSProperties = {
    width: '100%',
    height: '200px',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',

    // backgroundColor: '#FF000055'
}

function TestPanelReduxReact(
    {data, filterIndexs}:{
        data: string[],
        filterIndexs: number[]
    }){
    
    // console.log("filterIndexs:", filterIndexs)
    return (
    <div style = {rootStyle}>
        <Filter/>
        {filterIndexs.map((vIndex)=>{
            const content = data[vIndex]
            return <MyButton key={`${vIndex}:${content}`} text={content} index={vIndex}/>
        })}
    </div>)
}

function mapStateToProps(state: any, ownProps: any){
    let filterIndexs : number[] = []

    let filterStatus = state.filter
    state.tabs.forEach((v: any, index: number)=>{
        if((filterStatus && v) || !filterStatus)  filterIndexs.push(index)
    })

    return {
        filterIndexs: filterIndexs
    }
}

export default connect(mapStateToProps, null)(TestPanelReduxReact)
