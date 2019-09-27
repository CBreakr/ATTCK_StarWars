import React from "react";
import { Link } from "react-router-dom";

class Character extends React.Component {

  render(){
    const character = this.props.character;
    const filmsURL = `/films/${character.id}`;

    return (
      <Link to={filmsURL}>
        <div style={{border:"1px solid black", width:"45%"}}>
          {character.name}
          <br />
          <img style={{width:"80%"}} src={character.imageURL} />
        </div>
      </Link>
    );
  }
}

export default Character;
