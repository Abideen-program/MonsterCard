import { Component } from "react";

import './card-list.styles.css'

class CardList extends Component {
    render() {

        const { aliens } = this.props
        return(
            <div className="card-list">
                {
                    aliens.map( (alien) => {
                        const {name, email, id} = alien
                        return (
                            <div className="card-container"  key={id}>
                                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                                <h2>{name}</h2>
                                <p>{email}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default CardList