
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {

    console.log("header state", this.props);

    let additionalClass = "";
    if(this.props.isFilmPage){
      additionalClass = "filmHeader";
    }
    else {
      additionalClass = "characterHeader";
    }

    const classes = `header ${additionalClass}`;
    let character = null;
    if(this.props.characterId){
      character = this.props.characters.find(char => {
        // matching string to number here
        return this.props.characterId == char.id;
      });
    }

    return (
      <div className={classes}>
        <h1>STAR<br />WARS</h1>
        {this.props.isFilmPage
          ? <>
            <div className="characterHeaderName backgroundBlur">
              {character.name}
            </div>
            <div className="backLinkContainer">
              <Link className="backLink" to="/">
                <span>
                  Pick Another Character
                </span>
              </Link>
            </div>
          </>
          :<div className="instructions backgroundBlur">
            Select a character to explore their films
          </div>
        }
      </div>
    );
  }
}

export default Header;
