
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
      <div className="filmComponent">
        <span style={{gridArea:"title"}}>
          <span style={{fontSize:"2rem", backgroundColor:"black"}}>{film.title}</span>
        </span>
        <span style={{gridArea:"image"}}>
          <img style={{width:"95%", border:"2px solid var(--card-blue)"}} src={film.imageURL} />
        </span>
        <span style={{gridArea:"director"}}>
          <span style={{backgroundColor:"black"}}>Directed By: <br /> {film.director}</span>
        </span>
        <span style={{gridArea:"released", backgrundColor:"black"}}>
          <span style={{backgroundColor:"black"}}>Released: <br /> {release_date}</span>
        </span>
      </div>
    );
  }
}

function getRomanNumeral(episode){
  // we're dealing with numbers below 20 for the foreseeable future

}

export default Film;
