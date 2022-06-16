import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super()

      this.state = {
       monsters: []
      }
      console.log('constructor')
    }

            

    render() {
      console.log('render')
      return (
        <div className="App">
            
        </div>
      );
    }
}

export default App;
