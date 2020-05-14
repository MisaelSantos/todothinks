import React from 'react';

import './styleApp.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.list = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: [],
      todos: []
    }
  }

  handleChange(event) {
    this.setState({
      value: [event.target.value]
    });
  }

  handleSubmit(event) {


    this.list.push(this.state.value);

    localStorage.setItem('myValueInLocalStorage', JSON.stringify(this.list));

    this.setState({
      todos: JSON.parse(localStorage.getItem('myValueInLocalStorage')) || []
    })

    event.preventDefault();
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
            this.state.todos.map(item => {
              return (
                <li key={item.id}>
                  {item}
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
