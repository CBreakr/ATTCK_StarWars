
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
        <div style={{gridArea:"title", width:"80vw"}}>
          <div className="backgroundBlur" style={{fontSize:"3em", textTransform:"none", padding:"1vw 1.5vw 0"}}>{film.title}</div>
        </div>
        <span style={{gridArea:"image"}}>
          <img style={{width:"50vw", border:"0.4vw solid var(--card-blue)"}} src={film.imageURL} />
        </span>
        <span style={{gridArea:"meta", justifySelf:"center", fontSize:"1.3em"}}>
          <div className="backgroundBlur" style={{marginTop:"2vw", paddingTop:"3vw", padding:"0.5vw"}}>
            <div style={{display:"inline-block"}}>DIRECTED&nbsp;BY:</div>
            <br />
            <div style={{display:"inline-block", margin:"0.5vw"}}>{film.director}</div>
          </div>
          <div className="backgroundBlur" style={{marginTop:"0.2vw", padding:"0.5vw"}}>
            <div style={{display:"inline-block"}}>RELEASED:</div>
            <br />
            <div style={{display:"inline-block"}}>{`${day},`}</div>
            <br />
            <div style={{display:"inline-block"}}>{`${date}`}</div>
            <br />
            <div style={{display:"inline-block", fontSize:"2em"}}>{year}</div>
          </div>
        </span>
      </div>
    );
  }
}

export default Film;
