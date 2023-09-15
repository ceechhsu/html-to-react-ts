import "./Card.css";

type CardProps = {
  characters: Character[];
};

type Character = {
  name: string;
  nickName: string | null;
  imageUrl: string;
  background: string;
};

function Card(props: CardProps) {
  const characters = props.characters;
  return (
    <section id="character-cards">
      {characters.map((eachCharacter) => {
        return (
          <div className="card">
            <div className="card-titles">
              <h3>{eachCharacter.name}</h3>
              <h4>{eachCharacter.nickName}</h4>
            </div>
            <img src={eachCharacter.imageUrl} alt={eachCharacter.name} />
            <p>{eachCharacter.background}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Card;
