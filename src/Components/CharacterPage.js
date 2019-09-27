
import React from "react";

import Character from "../Containers/CharacterContainer";

class CharacterPage extends React.Component{

  componentDidMount(){
    this.props.requestFilmImages();
    this.props.requestCharacters();
  }

  render(){
    return (
      <div>
        Character Page
        <div style={{display:"flex"}}>
          {
            this.props.characters
            ? this.props.characters.map(character => (
                <Character key={character.name} character={character} />
              ))
            : <span>Loading</span>
          }
        </div>
      </div>
    );
  }
}

/*
{}
*/

export default CharacterPage;
