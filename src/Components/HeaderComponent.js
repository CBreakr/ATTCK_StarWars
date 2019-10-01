
import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {

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
        {/* for the film page, we have a link button
          back to the main character page

          on mobile, the character name will
          be added to the header

          for the character page, we
          have a simple instruction message
        */}
        {this.props.isFilmPage
          ? <>
            <div className="characterHeaderName textShadowDark">
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
          :<div className="instructions textShadowDark">
            Select a character to explore their films
          </div>
        }
      </div>
    );
  }
}

export default Header;
