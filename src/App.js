import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {   

    constructor() {
        super()

        this.state = {
            monsters: [],
            searchField: ''
        }
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( (response) => response.json() )
        .then( (users) => this.setState( () => {
            return{
                monsters: users
            } 
        }) )
    }

    onsearch = (event) => {
        const searchString = event.target.value.toLowerCase()

        this.setState( () => {
            return{
                searchField: searchString
            }
        })
    }

    render() {

        
        
        const filteredMonsters = this.state.monsters.filter( (monster) => {
            return monster.name.toLowerCase().includes(this.state.searchField)
        } )
    
        return (
            <div className="App">
                <input 
                    className='search-box'
                    type='search'
                    placeholder='search monster'
                    onChange={this.onsearch}
                />
                {
                    filteredMonsters.map( (monster) => {
                        return (
                            <div key={monster.id}>
                                <h1>{monster.name}</h1>
                            </div>
                        )
                    } )
                }
            </div>
        );
    }
}

export default App;
