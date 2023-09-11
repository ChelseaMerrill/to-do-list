import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import logo from './check.png';
import './App.css';

const initialList = [
  {
    id:1,
    item:'take out trash'
  },
  {
    id: 2,
    item: 'go for a run'
  },
  {
    id:3,
    item: 'wash car'
  }
]

function App() {

  const [tasks, setTasks] = React.useState(initialList);
  const [name, setName] = React.useState('');
  
  const handleChange = (e) => {
    setName(e.target.value);
  }
  const addItem = () => {
    const newList = tasks.concat({ name, id: uuidv4() });

    setTasks(newList);

    setName('');

  }

  const Todo = tasks.map(task => 
    <li key={task.id} className='item'>
      <input type="checkbox"/>
      <p>{task.item}</p>
    </li>
  )

  return (
    <div className="App">
      <div className='heading'>
        <div className='logo-container'><img src={logo} className="App-logo" alt="checkmark" /></div>      
        <h1>Chelsea's To-Do List</h1>
      </div>
      <div className='list'>
        <ul>{Todo}</ul>
        <input type="text" value={name} onChange={handleChange}/>
        <button onClick={addItem}>add</button>

      </div>
    </div>
  );
}

export default App;
