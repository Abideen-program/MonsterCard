import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { aliens } = props
  return (
    <div className="card-list">
      {aliens.map((alien) => {
        return <Card alien={alien} key={alien.id} />;
      })}
    </div>
  );
};

export default CardList;
