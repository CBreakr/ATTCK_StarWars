
import React from "react";

import dateformat from "dateformat";

const backgroundBlurInline = {

}

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
          <div className="backgroundBlur" style={{fontSize:"2rem", textTransform:"uppercase", padding:"10px 15px 0"}}>{film.title}</div>
        </span>
        <span style={{gridArea:"image"}}>
          <img style={{width:"30vw", border:"4px solid var(--card-blue)"}} src={film.imageURL} />
        </span>
        <span style={{gridArea:"meta", justifySelf:"center"}}>
          <div className="backgroundBlur" style={{marginTop:"20px", paddingTop:"30px", padding:"5px"}}>
            <div style={{display:"inline-block"}}>DIRECTED&nbsp;BY:</div>
            <br />
            <div style={{display:"inline-block", margin:"3px"}}>{film.director}</div>
          </div>
          <div className="backgroundBlur" style={{marginTop:"20px", padding:"5px"}}>
            <div style={{display:"inline-block"}}>RELEASED:</div>
            <br />
            <div style={{display:"inline-block"}}>{`${day},`}</div>
            <br />
            <div style={{display:"inline-block"}}>{`${date}`}</div>
            <br />
            <div style={{display:"inline-block", fontSize:"1.7rem"}}>{year}</div>
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
