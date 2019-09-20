import React, { Component } from 'react';

class Button extends Component {
  state = {  }
  render() { 
    return (
      <div className="button">
        {this.props.children}
      </div>
    );
  }
}
 
export default Button;
