import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./Containers/HeaderContainer";
import CharacterPage from "./Containers/CharacterPageContainer";
import FilmPage from "./Containers/FilmPageContainer";

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Header />
        <div className="mainContent">
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
