
import React from "react";

import Character from "../Containers/CharacterContainer";

class CharacterPage extends React.Component{

  componentDidMount(){
    if(!this.props.filmImages){
      this.props.requestFilmImages();
    }

    if(!this.props.characters){
      this.props.requestCharacters();
    }
  }

  render(){
    return (
      <div>
        <div style={{display:"grid", gridGap:"2px", gridTemplateColumns:"1fr 1fr"}}>
          {
            this.props.characters
            ? this.props.characters.map(character => (
                <Character key={character.name} character={character} isLink={true} />
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
