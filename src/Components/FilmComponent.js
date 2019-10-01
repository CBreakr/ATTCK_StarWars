
import React from "react";

import dateformat from "dateformat";

class Film extends React.Component {

  render(){
    const film = this.props.film;

    /*
    METADATA:
    title
    episode_id
    opening_crawl
    director
    release_date {'2005-05-19' ==> 'Thursday, May 19 2005'}
    */

    const release_date = dateformat(new Date(film.release_date), "dddd, mmmm dS, yyyy");
    const [day, date, year] = release_date.split(",");

    return (
      <div className="filmComponent">
        <div className="filmTitle textShadowDark">
          {film.title}
        </div>
        <div className="filmImageContainer">
          <img className="filmImage" src={film.imageURL} alt={film.title} />
        </div>
        <span className="filmMeta">
          <div className="textShadowDark filmDirectedByContainer">
            <div className="filmDirectedByHeader">DIRECTED&nbsp;BY:</div>
            <br />
            <div className="filmDirectedBy">{film.director}</div>
          </div>
          <div className="textShadowDark filmReleasedContainer">
            <div className="filmReleasedHeader">RELEASED:</div>
            <br />
            <div className="filmReleasedDayName">{`${day},`}</div>
            <br />
            <div className="filmReleasedMonthAndDate">{`${date}`}</div>
            <br />
            <div className="filmReleasedYear">{year}</div>
          </div>
        </span>
      </div>
    );
  }
}

export default Film;
