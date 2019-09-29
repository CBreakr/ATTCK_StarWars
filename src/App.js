import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import CharacterPage from "./Containers/CharacterPageContainer";
import FilmPage from "./Containers/FilmPageContainer";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <span className="header">
          <h1>STAR<br />WARS</h1>
          <h2 className="backgroundBlur" style={{marginTop:"8px", padding:"10px"}}>DISCOVER THE FILMS OF YOUR FAVORITE CHARACTERS</h2>
        </span>
        <div style={{marginTop:"16px"}}>
          <Switch>
            <Route exact path="/films/:characterId" component={FilmPage} />
            <Route exact path="/" component={CharacterPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
