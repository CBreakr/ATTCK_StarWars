
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
    const [day, date, year] = release_date.split(",");

    return (
      <div className="filmComponent">
        <span style={{gridArea:"title"}}>
          <span style={{fontSize:"2rem", textTransform:"uppercase", backgroundColor:"var(--background-black)"}}>{film.title}</span>
        </span>
        <span style={{gridArea:"image"}}>
          <img style={{width:"30vw", border:"4px solid var(--card-blue)"}} src={film.imageURL} />
        </span>
        <span style={{gridArea:"meta"}}>
          <div style={{marginTop:"10px"}}>
            <div style={{display:"inline-block", backgroundColor:"var(--background-black)"}}>DIRECTED&nbsp;BY:</div>
            <br />
            <div style={{display:"inline-block", margin:"3px", backgroundColor:"var(--background-black)"}}>{film.director}</div>
          </div>
          <div style={{marginTop:"20px"}}>
            <div style={{display:"inline-block", backgroundColor:"var(--background-black)"}}>RELEASED:</div>
            <br />
            <div style={{display:"inline-block", backgroundColor:"var(--background-black)"}}>{`${day},${date}`}</div>
            <br />
            <div style={{display:"inline-block", fontSize:"1.7rem", backgroundColor:"var(--background-black)"}}>{year}</div>
          </div>
        </span>
      </div>
    );
  }
}

function getRomanNumeral(episode){
  // we're dealing with numbers below 20 for the foreseeable future

}

export default Film;
