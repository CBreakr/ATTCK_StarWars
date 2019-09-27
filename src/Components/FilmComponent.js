
import React from "react";

class Film extends React.Component {

  render(){
    const film = this.props.film;

    return (
      <div style={{border:"1px solid black", width:"45%"}}>
        {film.title}
        <br />
        <img style={{width:"80%"}} src={film.imageURL} />
      </div>
    );
  }
}

export default Film;
