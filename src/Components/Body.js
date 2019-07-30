/* eslint-disable no-useless-constructor */
import React from 'react';
export default class Body extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
    console.log()
    return (
      <div>
      	<div className="transbox br3 pa3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <h1> Your IGN is: </h1>
          <p> {this.props.newIgn} </p>
          <button className="f6 link dim ph3 pv2 mb2 dib white bg-black" onClick={this.props.onButtonClick}> Generate IGN </button>
        </div>
      </div>
    );
  }
}