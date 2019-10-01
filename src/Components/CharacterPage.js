
import React from "react";

import Character from "./CharacterComponent";

class CharacterPage extends React.Component{

  componentDidMount(){
    // request any data we don't yet have

    if(!this.props.filmImages){
      this.props.requestFilmImages();
    }

    if(!this.props.characters){
      this.props.requestCharacters();
    }

    // always set the current page
    this.props.setPageToCharacter();
  }

  render(){
    return (
      <div>
        <div className="characterPage">
          {
            this.props.characters
            ? this.props.characters.map(character => (
                <Character key={character.name} character={character} isLink={true} />
              ))
            : <span className="loading">Loading</span>
          }
        </div>
      </div>
    );
  }
}

export default CharacterPage;
