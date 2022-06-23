import { useState } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {

    const [searchField, setSearchField] = useState('')

    console.log(searchField)

    const onSearch = (event) => {
        const searchString = event.target.value.toLowerCase()
        setSearchField(searchString)
    }

    return (
        <div className="App">
            <h1 className='app-title'>Search Your Alien</h1>
            < SearchBox
                onChangeHandler = {onSearch}
                placeholder={'search aliens'}
                className= 'alien-search-box'
                />
        </div>
    )
}

// class App extends Component {

//     constructor() {
//         super()

//         this.state = {
//             aliens: [],
//             searchField: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then( (response) => response.json() )
//         .then( (users) => this.setState( () => {
//             return {
//                 aliens: users
//             }
//         } ) )
//     }

//     onSearch = (event) => {
//         const searchString = event.target.value.toLocaleLowerCase();

//         this.setState( () => {
//             return {
//                 searchField: searchString
//             }
//         })
//     }

//     render() {

//         const { aliens, searchField} = this.state
//         const { onSearch } = this

//         const filteredAliens = aliens.filter( (alien) => {
//             return alien.name.toLocaleLowerCase().includes(searchField)
//         })

//         return (
//             <div className="App">
//                 <h1 className='app-title'>Search Your Alien</h1>
//                 < SearchBox
//                     onChangeHandler = {onSearch}
//                     placeholder={'search aliens'}
//                     className= 'alien-search-box'
//                 />
//                 <CardList aliens={filteredAliens}/>
//             </div>
//         );
//     }
// }

export default App;
