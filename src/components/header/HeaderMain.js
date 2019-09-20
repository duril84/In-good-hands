import React, { Component } from 'react';
import Button from './Button';

class HeaderMain extends Component {
  state = {  }
  render() { 
    return (
      <div className="header_main">
        <div className="header_main-description">Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</div>
        <div className="decoration_img"></div>
        <div className="header_main-buttons"> 
          <Button>ODDAJ<br/>RZECZY</Button>
          <Button>ZORGANIZUJ ZBIÓRKĘ</Button>
        </div>
      </div>
    );
  }
}
 
export default HeaderMain;