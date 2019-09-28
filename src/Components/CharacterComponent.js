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
    <div style={{margin:"16px auto 0"}}>
      <span className="characterName">
        {props.character.name}
      </span>
      <br />
      <img style={{height:"60vh"}} src={props.character.imageURL} />
    </div>
  );
}

export default Character;
