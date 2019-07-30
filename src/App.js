import React from 'react';
import Particles from 'react-particles-js';
import Header from './Components/Header';
import Body from './Components/Body';
import './App.css';
import 'tachyons';
import generateName from "sillyname";

class App extends React.Component {
  newIgn = generateName()
  constructor(props){
    super(props);
    this.state ={
      newIgn: this.newIgn
      // newIgn: "" failed attempt to update state
    };
    this.onButtonClick = this.onButtonClick.bind(this);
  } 

  // onButtonClick(e) {
  //   this.setState({newIgn: this.newIgn})
  // } 
  //failed attempt to update state


  onButtonClick(e){
    window.location.reload(); 
  }
  //I dont know why I put this here instead of in the button directly but whatever its sweet passing methods from components to another. Ok this is one very long comment

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
      <Body onButtonClick={this.onButtonClick} newIgn={this.state.newIgn}/>
      <p className="footer-credits"> <i>Developed by TechDan & Jerry Navi</i> </p>
      </React.Fragment>
    );
  }
}
export default App;