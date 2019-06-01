import React, { Component } from 'react';
import 'styles/App.css';
import Navigator from 'components/Navigator';
import SabteGheybat from 'components/SabteGheybat'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SabteGheybat />
        <Navigator />
      </div>
    );
  }
}

export default App;