
import React from "react";
import { Redirect } from "react-router-dom";

import Film from "../Containers/FilmContainer";

class FilmPage extends React.Component {

  componentDidMount(){
    console.log("props for films page", this.props);

    const {characterId} = this.props.match.params;

    const character = findCharacterById(this.props.characters, characterId);

    console.log(`character: ${characterId}`, character);

    if(character && !character.films){
      this.props.requestCharacterDetails(character);
    }
    else{
      this.props.receiveCharacterDetails(character);
    }
  }

  render(){
    const character = this.props.currentCharacter;

    return (
      <div>
        Film Page
        <div>
        <div style={{display:"flex"}}>
          {
            character && character.films
            ? character.films.map(film => (
                <Film key={film.episode_id} film={film} />
              ))
            : <span>Loading</span>
          }
        </div>
        </div>
      </div>
    );
  }
}

//
//
//
function findCharacterById(characters, id){
  const match = characters.find(char => {
    // matching string to number here
    return id == char.id;
  });

  return match;
}

export default FilmPage;
