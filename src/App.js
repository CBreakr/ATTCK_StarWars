import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";

import CharacterPage from "./Containers/CharacterPageContainer";
import FilmPage from "./Containers/FilmPageContainer";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <h1>Star Wars Header for now</h1>
        <Switch>
          <Route exact path="/" component={CharacterPage} />
          <Route exact path="/films" component={FilmPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
