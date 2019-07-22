import React from 'react';
export default class Header extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<h1 className= 'header'> Welcome To IGN Generator </h1>
      </div>
    );
  }
}