
import React from "react";
import { Redirect, Link } from "react-router-dom";

import MediaQuery from "react-responsive";

// import Character from "../Containers/CharacterContainer";
// import Film from "../Containers/FilmContainer";

import Character from "./CharacterComponent";
import Film from "./FilmComponent";
import FilmCarosel from "./FilmCaroselComponent";

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
      this.props.requestCharacterDetails(character);
    }
    else{
      this.props.receiveCharacterDetails(character);
    }

    this.props.setPageToFilm(characterId);
  }

  render(){
    if(!this.props.characters){
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
      <>
        <MediaQuery query="(max-width:768px)">
          <FilmListing character={character} />
        </MediaQuery>

        <MediaQuery query="(min-width:769px)">
          <div className="filmMainDisplay">
            <Character character={character} />
            <FilmCarosel
              character={character}
              currentFilmIndex={this.props.currentFilmIndex}
              showPreviousFilm={this.props.showPreviousFilm}
              showNextFilm={this.props.showNextFilm}
            />
          </div>
        </MediaQuery>
      </>
    );
  }
}

const FilmListing = (props) => {
  const character = props.character;

  return (
      <div className="filmListing">
        {
          character && character.films
          ? character.films.map(film => (
              <Film key={film.episode_id} film={film} />
            ))
          : <span className="loading">Loading</span>
        }
      </div>
  );
}

export default FilmPage;
