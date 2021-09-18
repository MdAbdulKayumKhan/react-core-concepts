import logo from './logo.svg';
import './App.css';

function App() {
  const singer ={
    name: 'Eva Rahman',
    job: 'singer'
  }
  const singerStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '20px'
  }
  return (
    <div className="App">
      <header className="App-header">
      {/* JSX stands for JavaScript XML */}
      <div className="container">
        <p style ={singerStyle}>{singer.name +' ' + singer.job}</p>
      </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color:'green', background: 'cyan'}}>
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
      </header>
    </div>
  );
}

export default App;
