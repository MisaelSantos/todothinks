import React from 'react';

import './styleApp.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {
      value: '',
      todos: JSON.parse(localStorage.getItem('myValueInLocalStorage')) || []
    }

  }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: [event.target.value]
    });
  }

  handleSubmit(event) {
     //<input type="text" value={this.state.value} className="thought" onChange={this.handleChange} />
    event.preventDefault();
    if (this.state.value !== '') {

      localStorage.setItem('myValueInLocalStorage', JSON.stringify([...this.state.todos, this.state.value]));

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

    this.setState({
      value: '',
      todos: del
    })
  }

  render() {

    return (

      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">PENSAMENTO</label>
          <textarea className="thought" value={this.state.value} cols="30" rows="10" onChange={this.handleChange}></textarea>
          <br/>
          <button className="btn">Finish</button>
        </form>

        <div class = "divthinks">
          {
            this.state.todos.map((item, index) => {
              return (
                <div key={index}>
                  {item}
                  <br/>
                  <button onClick={() => this.deleteItem(index)}>X</button>{' '}
                </div>
              )
            })
          }
        </div>

      </div>

    )
  }

}

export default App;
