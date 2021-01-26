import React, {Component} from 'react';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [

      ],
      searchField: ''
    }

  }

  componentDidMount() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (      
      <div className="App">
        <h1 className='title'>Monsters Roledex</h1>
        <SearchBox placeholder="Enter Monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }  
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React Now!
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
