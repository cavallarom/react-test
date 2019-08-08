import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { NameForm } from './Form';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'react'
    };
  }

  render() {
    return (
      <div class="container">
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <NameForm />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
