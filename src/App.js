import React from 'react';
import './App.css';

class App extends React.Component {

  async componentDidMount(){
    // fetch the configuration
    const response = await fetch("../config/characters.json",
      {
         headers : {
           'Content-Type': 'application/json',
           'Accept': 'application/json'
         }
     });
    const data = await response.json();

    console.log("characters", data);
  }

  render(){
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
