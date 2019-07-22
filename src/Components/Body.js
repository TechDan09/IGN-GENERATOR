import React from 'react';
export default class Body extends React.Component {
	constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      	<div className="transbox br3 pa3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
          <h1> Your IGN is: </h1>
          <p> {this.props.newIgn} </p>
        </div>
      </div>
    );
  }
}