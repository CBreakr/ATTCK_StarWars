
import React from "react";

class CharacterPage extends React.Component{

  componentDidMount(){
    this.props.requestFilmImages();
    this.props.requestCharacters();
  }

  render(){

    console.log("render", this.props);

    return (
      <div>
        Character Page
        {
          this.props.characters
          ? this.props.characters.map(character => (
              <div key={character.name}>
                {character.name}
              </div>
            ))
          : <span>Loading</span>
        }
      </div>
    );
  }
}

/*
{}
*/

export default CharacterPage;
