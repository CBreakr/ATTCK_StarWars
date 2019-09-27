import React from "react";
import { Link } from "react-router-dom";

class Character extends React.Component {

  render(){
    const character = this.props.character;
    const filmsURL = `/films/${character.id}`;

    const isLink = this.props.isLink;

    return (
      <>
      {
        isLink
      ? <Link to={filmsURL}>
          <InnerComponent character={this.props.character} />
        </Link>
      : <InnerComponent character={this.props.character} />
      }      
      </>
    );
  }
}

const InnerComponent = (props) => {
  return (
    <div style={{border:"1px solid black"}}>
      {props.character.name}
      <br />
      <img style={{width:"200px"}} src={props.character.imageURL} />
    </div>
  );
}

export default Character;
