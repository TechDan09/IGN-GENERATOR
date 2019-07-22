import React from 'react';
import Particles from 'react-particles-js';
import Header from './Components/Header';
import Body from './Components/Body';
// import NameGenerator from './Components/NameGenerator';
import './App.css';
import 'tachyons';
import generateName from "sillyname";

class App extends React.Component {
  newIgn = generateName();
  constructor(props){
    super(props);
    this.state ={
      newIgn: this.newIgn
    };
  }
  componentDidMount() {
    // const newIgn = generateName();
    // console.log(newIgn);
    // this.setState(newIgn);
    // I'm not sure how setState works
  }
  
  render() {
    return (
      <React.Fragment>
      <Header />
      <Particles
          className= 'particles'
          params={{
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 7,
                    "random": true
                },
                "move": {
                    "direction": "bottom",
                    "out_mode": "out"
                },
                "line_linked": {
                    "enable": false
                }
            },
            "interactivity": {
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "remove"
                    }
                },
                "modes": {
                    "remove": {
                        "particles_nb": 10
                    }
                }
            }
        }} 
      />
      <Body newIgn={this.state.newIgn}/>
      <p className="noob"> <i>ps. carnival is a noob</i> </p>
      </React.Fragment>
    );
  }
}
export default App;