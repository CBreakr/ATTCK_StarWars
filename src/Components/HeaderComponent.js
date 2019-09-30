
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

    return (
      <div className={classes}>
        <h1>STAR<br />WARS</h1>
        <h2 className="backgroundBlur">DISCOVER THE FILMS OF YOUR FAVORITE CHARACTERS</h2>
        {this.props.isFilmPage
          ? <div className="backLinkContainer">
            <Link className="backLink" to="/">
              <span>
                Pick Another Character
              </span>
            </Link>
          </div>
          :""
        }
      </div>
    );
  }
}

export default Header;
