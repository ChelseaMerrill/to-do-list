import logo from './check.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='heading'>
        <div className='logo-container'><img src={logo} className="App-logo" alt="checkmark" /></div>
        
        <h1>Chelsea's To-Do List</h1>
      </div>
      <div className='list'></div>
    </div>
  );
}

export default App;
