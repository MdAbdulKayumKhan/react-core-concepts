import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'shuvo'];
  const cinemas = [
    {nayok: 'koober', nayika: 'kopila'},
    {nayok: 'Rubel', nayika: 'moushumi'},
    {nayok: 'Razzak', nayika: 'shabana'}

  ];
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      }
     
      
    </div>
  );
}

function Person(props){
  console.log(props);
  const personStyle = {
    backgroundColor: 'cyan',
    padding: '10px',
    color: 'white',
    margin: '10px',
    borderRadius: '20px',
    border: '2px solid lightblue'
  }
  return (
    <div 
    // using class, personStyle-object and derict object
    // className="person"
    // style={personStyle}
    style={{background: 'red', borderRadius: '20px', margin: '20px'}}
    > 
      <h2>Name: {props.name}</h2>
      <p>His heroin: {props.nayika}</p>
    </div>
  )
  
}

function Cinema(props){

  return (
    <div  className="person">
      <h2>Nayko: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  )
}

function Friend(){
  return (
    <div>
      <h3>Phone: xp45</h3>
    </div>
  )
}

{/* <Person name="Ruble" nayika="moushumi"> </Person>
      <Person name="salman khan" nayika="catrina"> </Person> */}

/*
       <Person name={nayoks[0]} nayika="moushumi"> </Person>
      <Person name={nayoks[1]} nayika="catrina"> </Person>
      <Person name={nayoks[2]} nayika="catrina"> </Person>

*/ 
export default App;
