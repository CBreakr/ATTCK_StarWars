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
            <InnerComponent character={this.props.character} />
          </Link>
        : <InnerComponent character={this.props.character} />
        }
      </div>
    );
  }
}

const InnerComponent = (props) => {
  return (
    <div>
      <span className="characterName backgroundBlur">
        {props.character.name}
      </span>
      <img className="characterCard" src={props.character.imageURL} />
    </div>
  );
}

export default Character;
