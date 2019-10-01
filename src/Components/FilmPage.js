
import React from "react";
import { Redirect } from "react-router-dom";

import MediaQuery from "react-responsive";

import Character from "./CharacterComponent";
import Film from "./FilmComponent";
import FilmCarousel from "./FilmCarouselComponent";

class FilmPage extends React.Component {

  componentDidMount(){
    // nothing to do in this case
    if(!this.props.characters){
      return;
    }

    // get the character id from the query string
    const characterId = this.props.match.params.characterId;

    const character = this.props.characters.find(char => {
      // matching string to number here
      return characterId == char.id;
    });

    // if we don't have the films, go to the API
    // otherwise just set them and continue with the render
    if(character && !character.films){
      this.props.requestCharacterDetails(character);
    }
    else if(character){
      this.props.receiveCharacterDetails(character);
    }

    // always set the current page
    this.props.setPageToFilm(characterId);
  }

  render(){
    // redirect to the main page if the user
    // tries to enter a URL without first having
    // loaded the character data
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
        {/* handle switching between display modes in here */}

        {/* mobile version */}
        <MediaQuery query="(max-width:768px)">
          <FilmListing character={character} />
        </MediaQuery>

        {/* web versions */}
        <MediaQuery query="(min-width:769px)">
          <div className="filmMainDisplay">
            <Character character={character} />
            <FilmCarousel
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

// just a simple dump of the Films as divs
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
