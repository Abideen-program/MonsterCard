import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super()

      this.state = {
       monsters: [
        {
          name: 'Jackie',
          color: 'Black'
        },

        {
          name: 'Babel',
          color: 'Green'
        },

        {
          name: 'Agott',
          color: 'Blue'
        }

       ] 
      }
    }
    render() {
      return (
        <div className="App">
            {
              this.state.monsters.map( (monster) => {
                  return <h2>My name is {monster.name}, and I am {monster.color}</h2>
              } )
            }
        </div>
      );
    }
}

export default App;
