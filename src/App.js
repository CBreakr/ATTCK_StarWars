import React from 'react';
import './App.css';

import { Route, Switch, Redirect } from "react-router-dom";

import CharacterPage from "./Containers/CharacterPageContainer";
import FilmPage from "./Containers/FilmPageContainer";

class App extends React.Component {
  render(){
    return (
      <div className="App" style={{background:"url('/images/space.jpg') top right no-repeat", backgroundAttachment:"fixed", height:"100vh"}}>
        <h1>STAR WARS</h1>
        <Switch>
          <Route exact path="/films/:characterId" component={FilmPage} />
          <Route exact path="/" component={CharacterPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
