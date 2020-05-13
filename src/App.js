import React from 'react';

import './styleApp.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.todos = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valuesLocalStorage = this.valuesLocalStorage.bind(this);

    this.state = {
      value: ''
    }

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    this.todos.push(this.state.value);
    localStorage.setItem('myValueInLocalStorage', JSON.stringify(this.todos));
    event.preventDefault();
  }

  valuesLocalStorage() {
    const data = JSON.parse(localStorage.getItem('myValueInLocalStorage')) || [];
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} className="thought" onChange={this.handleChange} />
          <button onClick={this.valuesLocalStorage} className="btn">Finish</button>
        </form>
      </div>
    )
  }

}

export default App;
