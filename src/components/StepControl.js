import React from 'react';
import SVG_UI from './SVG_UI';
import Seq from './Seq';

class StepControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      stepOn: [false, false, false, false, false, false, false],
      
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
      <div>
        <SVG_UI
        borderOnClick={this.handleClickBorder}
        stepOn={this.state.stepOn}
        activeLine={this.state.activeLine}
        />
        <Seq
        currentStep={this.state.stepOn}
        />
      </div>   
    );
  };
};

export default StepControl;