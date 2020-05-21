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

      const now = new Date();

      const day = now.getDate(), mon = now.getMonth() + 1, year = now.getFullYear();

      const hrs = now.getHours(), min = now.getMinutes(), sec = now.getSeconds();

      const addItem = [...this.state.todos, [[this.state.value], [((day > 9) ? day : '0' + day) + "/" + ((mon > 9) ? mon : '0' + mon) + "/" + year +
        ' - ' + ((hrs > 9) ? hrs : '0' + hrs) + ":" + ((min > 9) ? min : '0' + min) + ':' + ((sec > 9) ? sec : '0' + sec)]]];

      localStorage.setItem('myValueInLocalStorage', JSON.stringify(addItem));

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
          <label htmlFor="">THOUGHTS</label>
          <textarea className="thought" value={this.state.value} cols="30" rows="10" onChange={this.handleChange}></textarea>
          <br />
          <button className="btn">FINISH</button>
        </form>

        <div className="divThinks">
          {
            this.state.todos.map((item, index) => {
              return (
                <div onClick={() => this.deleteItem(index)} key={index}>
                  {item[0]}
                  <br/>
                  {item[1]}
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
