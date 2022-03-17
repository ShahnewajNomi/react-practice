import logo from './logo.svg';
import './App.css';

const number=5555;
const singer={name:'Dr.Mahfuz',Job:'Singing'}
const singer2={name:'eva rahman',Job:'Singing2'}

const singerStyle={
  color: 'purple',
  backgroundColor: 'white'
}


function App() {
  const mew=['Nomi','Ananya','Love']
  return (
    <div className="App">
      <Person name={mew[0]} nayok="Ananya"></Person>
      <Freinds gangstar="Alom"></Freinds>
      <Person name={mew[1]} nayok="Nomi"></Person>
      <Freinds gangstar="Khairul"></Freinds>
      <Person name="Love" nayok="pirit"></Person>
      <Freinds gangstar="Biral"></Freinds>
    </div>
  );
}
function Person(props){
  console.log(props);
  return (
    <div className='person'>
      <h1>Peyaar:{props.name}</h1>
      <p>Assiq:{props.nayok}</p>
    </div>
  )
}

function Freinds(props1){
  return (
  <div className='frnds'>
    <h1>Name:{props1.gangstar}</h1>
    <p>Profeesion:Maramari</p>
  </div>
  )
}

export default App;

