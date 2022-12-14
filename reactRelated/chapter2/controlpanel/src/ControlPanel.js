import React, { Component } from 'react';
import Counter from './Counter.js';

const style = {
  margin: '20px'
};

class ControlPanel extends Component {
  componentDidMount(){
    console.log("didMount ControlPanel")
  }
  render() {
    console.log('enter ControlPanel render');
    return (
      <div style={style}>
        <Counter caption="First"/>
        <Counter caption="Second" initValue={9} />
        <Counter caption="Third" initValue={20} />
        <button onClick={ () => this.forceUpdate() }>
          Click me to re-render!
        </button>
      </div>
    );
  }
}

export default ControlPanel;

