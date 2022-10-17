import { CSSProperties } from 'react'
import { Filter } from './Filter'
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

export default function TestPanelReduxReact(
    {data}:{
        data: string[]
    }){
    return (
    <div style = {rootStyle}>
        <Filter/>
        {data.map((v,_index)=>{
            return <MyButton key={`${v}:${_index}`} text={v} index={_index}/>
        })}
    </div>)
}