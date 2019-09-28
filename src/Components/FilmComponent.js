
import React from "react";

import dateformat from "dateformat";

class Film extends React.Component {

  render(){
    const film = this.props.film;

    console.log("film", film);

    /*
    METADATA:
    title
    episode_id
    opening_crawl
    director
    release_date {'2005-05-19' ==> 'Thursday, May 19 2005'}
    */

    const release_date = dateformat(new Date(film.release_date), "dddd, mmmm dS, yyyy");

    return (
      <div style={{border:"1px solid black", width:"45%"}}>
        {film.title}
        <br />
        <img style={{width:"80%"}} src={film.imageURL} />
        <br />
        Directed By: {film.director}
        <br />
        Released: {release_date}
      </div>
    );
  }
}

function getRomanNumeral(episode){
  // we're dealing with numbers below 20 for the foreseeable future

}

export default Film;
