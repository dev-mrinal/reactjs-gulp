/*
*	Author: Mrinal Mondal
*	===========================================================================
*/

import React from 'react';

export default  class HelloMessage extends React.Component {
  render() {
    return <div><h2>Hello {this.props.name}</h2></div>;
  }
}