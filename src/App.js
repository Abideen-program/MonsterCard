import { Component } from 'react'
import CardList from './components/card-list/card-list.component';
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
            return {
                monsters: users
            }
        }
        )
        )
    }

    onSearch = (event) => {
        const searchString = event.target.value.toLowerCase();
        
        this.setState( () => {
            return {
                searchField: searchString
            }
        })
    }

    render() {

        const { monsters, searchField } = this.state
        const { onSearch } = this

        const filteredMonsters = monsters.filter( (monster) => {
            return monster.name.toLowerCase().includes(searchField)
        }
        )
    
        return (
            <div className="App">

                <input 
                    className='search-box'
                    type = 'search'
                    onChange={onSearch}
                />  

                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
