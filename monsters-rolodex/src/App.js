import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstein',
          id: 'acs1'
        },
        {
          name: 'Dracula',
          id: 'acs2'
        },
        {
          name: 'Zombie',
          id: 'acs3'
        },
        {
          name: 'Skeleton',
          id: 'acs3'
        }
      ]
    }
  }
render() {
  return (
    <div className="App">
     {this.state.monsters.map(monster => (
         <h1 key={monster.id}> {monster.name}</h1>
        ))}
    </div>
  );
}
}
export default App;
