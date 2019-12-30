import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>New React app</h1>
        <p>its working!</p>
        <Person name="Haritha" age="28" />
        <Person name="Sandeep" age="30" />
        <Person name="sravani" age="25">
          Hobbies: learn java
        </Person>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,"it wll work"));
  }
}

export default App;
