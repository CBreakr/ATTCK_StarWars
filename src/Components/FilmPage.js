
import React from "react";
import { Redirect, Link } from "react-router-dom";

import Character from "../Containers/CharacterContainer";
import Film from "../Containers/FilmContainer";

class FilmPage extends React.Component {

  componentDidMount(){
    if(!this.props.characters){
      return;
    }

    const characterId = this.props.match.params.characterId;

    const character = this.props.characters.find(char => {
      // matching string to number here
      return characterId == char.id;
    });

    if(character && !character.films){
      console.log("no films yet");
      this.props.requestCharacterDetails(character);
    }
    else{
      console.log("we have the films");
      this.props.receiveCharacterDetails(character);
    }

    console.log("film page characterId", characterId);

    this.props.setPageToFilm(characterId);
  }

  render(){
    if(!this.props.characters){
      console.log("redirecting");
      return (
        <Redirect to="/" />
      );
    }

    const characterId = this.props.match.params.characterId;
    const character = this.props.characters.find(char => {
      // matching string to number here
      return characterId == char.id;
    });

    return (
      <div className="filmMainDisplay">
        <Character character={character} />
        <div className="filmListing">
          {
            character && character.films
            ? character.films.map(film => (
                <Film key={film.episode_id} film={film} />
              ))
            : <span className="loading">Loading</span>
          }
        </div>
      </div>
    );
  }
}

export default FilmPage;
