import React, { Component } from 'react';

export class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cognome: '',
      persone: []
    };

    this.baseState = { nome: '', cognome: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  handleChange(event) {
    const val = event.target.value;
    const field = event.target.name;
    let mystate = {};
    mystate[field] = val;
    this.setState(mystate);
  }

  resetState(event) {
    this.focusElementName('nome');
    this.setState(this.baseState);
  }

  focusElementName(name) {
    document.getElementsByName(name)[0].focus();
  }

  handleSubmit(event) {
    
    this.setState(state => {
      const persone = state.persone.concat({
        nome: state.nome,
        cognome: state.cognome
      });
      return { persone };
    });
    
    this.resetState();
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label class="col-sm-12 control-label">
            Nome:
          <input class="form-control" type="text" name="nome" value={this.state.nome} onChange={this.handleChange} />
          </label>

          <label class="col-sm-12 control-label">
            Cognome:
          <input class="form-control" type="text" name="cognome" value={this.state.cognome} onChange={this.handleChange} />
          </label>
          <div class="col-sm-12">
            <button class="btn btn-primary" type="submit">Submit form</button>

            <button class="btn btn-secondary"
              onClick={this.resetState}
              type="reset">pulisci form</button>
          </div>
        </form>
        <hr/>
        <ul>
          {this.state.persone.map((p, index) => {
            return ( <li key={index}>{p.nome+ ' '+p.cognome}</li> )
          })}
        </ul>
      </div>
    );
  }
}