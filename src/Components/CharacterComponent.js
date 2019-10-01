import React from "react";
import { Link } from "react-router-dom";

class Character extends React.Component {

  render(){
    const character = this.props.character;
    const filmsURL = `/films/${character.id}`;

    const isLink = this.props.isLink;

    return (
      <div className="characterContainer">
        {
          isLink
        ? <Link className="characterLink" to={filmsURL}>
            <CharacterDisplay character={this.props.character} isLink={true} />
          </Link>
        : <CharacterDisplay character={this.props.character} isLink={false} />
        }
      </div>
    );
  }
}

const CharacterDisplay = (props) => {
  let classes = "innerCharacter";
  if(props.isLink){
    classes = `${classes} innerCharacterHover`;
  }

  return (
    <span className={classes}>
      <span className="characterName textShadowDark">
        {props.character.name}
      </span>
      <img className="characterCard" src={props.character.imageURL} alt={props.character.name} />
    </span>
  );
}

export default Character;
