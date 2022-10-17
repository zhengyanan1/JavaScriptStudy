import { CSSProperties } from 'react'
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

export default function TestPanelReduxReact(){
    return (
    <div style = {rootStyle}>
        <MyButton text="harden1" index={0}/>
        <MyButton text="lebora1" index={1}/>
    </div>)
}