import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import logo from './check.png';
import './App.css';

const startingList = [
  {
    id:1,
    name:'take out trash'
  },
  {
    id: 2,
    name: 'go for a run'
  },
  {
    id:3,
    name: 'wash car'
  }
]


const AddItem = ({ name, onChange, onAdd }) => (
  <div>
    <input type="text" value={name} onChange={onChange} className='adding'/>
    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
);

const Tasks = ({ tasks }) => (
  <ul>
    {tasks.map((item) => (
          <li key={item.id} className='item'>
          <input type="checkbox"/>
          <p>{item.name}</p>
        </li>
    ))}
  </ul>
);

const App = () => {
  const [tasks, setTasks] = React.useState(startingList);
  const [name, setName] = React.useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleAddItem = () => {
    const newList = tasks.concat({ name, id: uuidv4() });
    setTasks(newList);
    setName('');
  }

  return (
    <div className="App">
      <div className='heading'>
        <div className='logo-container'><img src={logo} className="App-logo" alt="checkmark" /></div>      
        <h1>Chelsea's To-Do List</h1>
      </div>
      <div className='list'>
      <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAddItem}
      />
      <Tasks tasks={tasks} />
    </div>
     

      </div>
    </div>
  );
}

export default App;
