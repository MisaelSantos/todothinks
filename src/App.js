import React from 'react';

import './styleApp.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      value: [],
      todos: JSON.parse(localStorage.getItem('myValueInLocalStorage')) || []
    }

    this.list = JSON.parse(localStorage.getItem('myValueInLocalStorage')) || []

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: [event.target.value]
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.value !== '') {
      this.list.push(this.state.value);

      localStorage.setItem('myValueInLocalStorage', JSON.stringify(this.list));

      const addItem = [...this.state.todos, this.state.value];
      this.setState({
        value: '',
        todos: addItem
      })
    }

  }

  deleteItem(key) {
    const del = this.state.todos.filter((item, index) => index !== key)

    localStorage.setItem('myValueInLocalStorage', JSON.stringify(del));
    this.list = del;

    this.setState({
      todos: del
    })
  }

  render() {

    return (

      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} className="thought" onChange={this.handleChange} />
          <button className="btn">Finish</button>
        </form>

        <ul>
          {
            this.state.todos.map((item, index) => {
              return (
                <li key={index}>
                  {item}
                  <button onClick={() => this.deleteItem(index)}>X</button>
                </li>
              )
            })
          }
        </ul>

      </div>

    )
  }

}

export default App;
