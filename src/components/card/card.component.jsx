import './card.styles.css'

const Card = (props) => {
    const { id, name, email } = props.alien;

    return (
      <div className="card-container">
        <img
          alt={`alien ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }

export default Card;
