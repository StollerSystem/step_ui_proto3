import React from 'react';
import SVG_UI from './SVG_UI';

class StepControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "test",
      stepOn: [false, false, false, false, false, false, false]
    }
  }

  handleClickBorder(id) {
    console.log(id)
    console.log(this.state.test)    
  }

  render() {
    return (      
      <SVG_UI
      borderOnClick={this.handleClickBorder}
      stepOn={this.state.stepOn}
      />
    )
  };
};

export default StepControl;