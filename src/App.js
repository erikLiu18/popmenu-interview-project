import logo from './logo.svg';
import './App.css';
import {Card, Menu, Navbar,} from './index.js';
import menu from './data.js';

function App() {

  console.log(menu)

  return (
    <div className="App">
      <Navbar />
      <Menu data={menu}/>
    </div>
  );
}

export default App;

/* <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header> */
