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
    <div style={{margin:"5vh auto 0"}}>
      <div className="characterName backgroundBlur">
        {props.character.name}
      </div>
      <img style={{width:"30vw"}} src={props.character.imageURL} />
    </div>
  );
}

export default Character;
