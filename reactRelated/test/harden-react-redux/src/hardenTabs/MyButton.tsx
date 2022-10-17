import { CSSProperties } from 'react'
import { connect } from 'react-redux'
import { hideAction, showAction } from './tabs/Actions'

let commonStyle: CSSProperties = {
    width: '200px',
    height: '50px',
    marginLeft: '10px',
    marginTop: '10px'
}

const unChoosedStyle: CSSProperties = {
    ...commonStyle,
    backgroundColor: '#FFF00066'
}
const choosedStyle: CSSProperties = {
    ...commonStyle,
    backgroundColor: '#000FFF66'
}

function MyButton({
        text, index, isShow, show, hide
    }:{
        text: string,
        index: number,
        isShow: boolean,
        show: Function,
        hide: Function
    }){
    
    // console.log(text, index, isShow, show, hide)

    return (
    <div style={isShow ? choosedStyle : unChoosedStyle} onClick={()=>{isShow ? hide(): show()}}>
        {text}
    </div>)
}

function mapStateToProps(state: any, ownProps: any){
    return {
        isShow: state.tabs[ownProps.index]
    }
}

function mapDispatchToProps(dispatch: any, ownProps: any){
    return {
        show: ()=>{
            dispatch(showAction(ownProps.index))
        },
        hide: ()=>{
            dispatch(hideAction(ownProps.index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyButton)