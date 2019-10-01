
import React from "react";

import Film from "./FilmComponent";

class FilmCarousel extends React.Component {

  constructor(){
    super();
    this.showPreviousFilm = this.showPreviousFilm.bind(this);
    this.showNextFilm = this.showNextFilm.bind(this);
  }

  showPreviousFilm = () => {
    this.props.showPreviousFilm();
  }

  showNextFilm = () => {
    this.props.showNextFilm();
  }

  render() {
    let character = null;
    let index = null;
    let length = 0;
    let film = null;

    if(
        this.props.character
        && this.props.character.films
        && this.props.currentFilmIndex != null
    ){
      character = this.props.character;
      index = this.props.currentFilmIndex;
      length = character.films.length;
      film = character.films[index];
    }

    return (
      <div className="filmCarousel">
      {
        character && film
        ?
        <>
          {
            index > 0
            ? <div
                className="filmCarouselButton filmCarouselPrevious"
                onClick={this.showPreviousFilm}
              >
                <span>
                  <i className="fas fa-chevron-left"></i>
                </span>
              </div>
            : ""
          }

          <Film key={film.episode_id} film={film} />

          {
            index + 1 < length
            ? <div
                className="filmCarouselButton filmCarouselNext"
                onClick={this.showNextFilm}
              >
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </div>
            : ""
          }
        </>
        : <span className="loading">Loading</span>
      }
      </div>
    );
  }
}

export default FilmCarousel;
