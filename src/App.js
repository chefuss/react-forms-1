import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    input: ''
  }
  updateInput = (input) => {
    this.setState(() => ({
      input: input
    }))
  }
  clearInput = () => {
    this.updateInput('')
  }
  //the possible solution 
  // handleChange = event => {
  //   this.state({input: event.target.value});
  // }
  render() {
    const {input} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input 
          type="text" 
          placeholder="Say Something"
          value={this.state.input}
          onChange={(event) => this.updateInput(event.target.value)} />
          <p className="echo">Echo: {this.state.input}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
