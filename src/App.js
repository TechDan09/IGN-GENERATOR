import React from 'react';
import Particles from 'react-particles-js';
import Header from './Components/Header';
import Body from './Components/Body';
import NameGenerator from './Components/NameGenerator';
import './App.css';
import 'tachyons';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      newIgn: ''
    };
  }
  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(res => {
      console.log(res);
      return res.json()
      })
      .then(newIgn => { 
        console.log(newIgn); 
        this.setState(newIgn)
        });
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