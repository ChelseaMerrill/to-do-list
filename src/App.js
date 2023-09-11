import logo from './check.png';
import './App.css';

const tasks = [
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
  const Todo = tasks.map(task => 
    <li key={task.id}>
      <p>{task.item}</p>
    </li>
  )
  
  // {
  //   return(
  //     <div>
  //       {tasks.map((task) => (
  //         <div key={task.id}>
  //           <li>{task.item}</li>
  //         </div>
  //       ))}
  //     </div>
  //   )
  // }
  // console.log(Todo(tasks))
  return (
    <div className="App">
      <div className='heading'>
        <div className='logo-container'><img src={logo} className="App-logo" alt="checkmark" /></div>      
        <h1>Chelsea's To-Do List</h1>
      </div>
      <div className='list'>
        <ul>{Todo}</ul>

      </div>
    </div>
  );
}

export default App;
