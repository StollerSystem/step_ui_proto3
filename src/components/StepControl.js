import React from 'react';
import SVG_UI from './SVG_UI';

class StepControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      stepOn: [false, false, false, false, false, false, false]
    }
  }

  handleClickBorder = (id) => {    
    let newArray = {...this.state.stepOn}
    newArray[id] = !newArray[id];
    this.setState({
      stepOn: newArray
    });
  };

  render() {
    return (      
      <SVG_UI
      borderOnClick={this.handleClickBorder}
      stepOn={this.state.stepOn}
      />
    );
  };
};

export default StepControl;