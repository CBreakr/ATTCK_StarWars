import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import CharacterPage from "./Containers/CharacterPageContainer";
import FilmPage from "./Containers/FilmPageContainer";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Star Wars Header for now</h1>
        <Switch>
          <Redirect exact path="/films" to="/" />
          <Route exact path="/films/:characterId" component={FilmPage} />
          <Route component={CharacterPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
