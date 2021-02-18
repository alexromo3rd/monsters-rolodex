import React, { Component } from 'react'
import CardList from './components/CardList/CardList'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}))
  }

  

  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return(
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    })

    return (
      <div className="App">
        <input 
          value={searchField}
          type='search'
          placeholder='search monsters'
          onChange={e => {this.setState({ searchField: e.target.value})}}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App