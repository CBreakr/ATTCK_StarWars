
import React from "react";
import { Redirect, Link } from "react-router-dom";

import MediaQuery from "react-responsive";

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
      <>
        <MediaQuery query="(max-width:768px)">
          <FilmListing character={character} />
        </MediaQuery>

        <MediaQuery query="(min-width:769px)">
          <div className="filmMainDisplay">
            <Character character={character} />
            <FilmCarosel character={character} />
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

class FilmCarosel extends React.Component {

  constructor(){
    super();
    this.showPreviousFilm = this.showPreviousFilm.bind(this);
    this.showNextFilm = this.showNextFilm.bind(this);
  }

  showPreviousFilm = () => {

  }

  showNextFilm = () => {

  }

  render() {
    const character = this.props.character;

    return (
      <div className="filmCarosel">
      {
        character && character.films
        ?
        <>
          <div className="filmCaroselButton filmCaroselPrevious">
            <span>
              <i class="fas fa-chevron-left"></i>
            </span>
          </div>

          <Film key={character.films[0].episode_id} film={character.films[0]} />

          <div className="filmCaroselButton filmCaroselNext">
            <span>
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </>
        : <span className="loading">Loading</span>
      }
      </div>
    );
  }
}

export default FilmPage;
