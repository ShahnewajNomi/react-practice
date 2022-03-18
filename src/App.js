// import logo from './logo.svg';
// import './App.css';

// const number=5555;
// const singer={name:'Dr.Mahfuz',Job:'Singing'}
// const singer2={name:'eva rahman',Job:'Singing2'}

// const singerStyle={
//   color: 'purple',
//   backgroundColor: 'white'
// }


// function App() {
//   const mew=['Nomi','Ananya','Love','hate','Bal','ffb']
//   return (
//     <div className="App">
      
//       {
//         mew.map(mew=> <li>Name: {mew}</li>)
//       }
//       {
//         mew.map(mew=> <Person name={mew}></Person>)
//       }
//       {/* <Person name={mew[0]} nayok="Ananya"></Person>
//       <Person name={mew[1]} nayok="Nomi"></Person>
//       <Person name={mew[2]} nayok="pirit"></Person> */}
//       <Freinds gangstar="Alom"></Freinds>
//       <Freinds gangstar="Khairul"></Freinds>      
//       <Freinds gangstar="Biral"></Freinds>
//     </div>
//   );
// }
// function Person(props){
//   console.log(props);
//   return (
//     <div className='person'>
//       <h1>Peyaar:{props.name}</h1>
//       <p>Assiq:{props.nayok}</p>
//     </div>
//   )
// }

// function Freinds(props1){
//   return (
//   <div className='frnds'>
//     <h1>Name:{props1.gangstar}</h1>
//     <p>Profeesion:Maramari</p>
//   </div>
//   )
// }

// export default App;
import logo from './logo.svg';
import './App.css';

const number = 5555; 
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'shuvro', job: 'pathor'}
]

const singerStyle= {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name ={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New component. YAY</h5>
      <p id="totocompany">rock mama React mama.</p>
      <Friend movie="Shingam" phone="01777"></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
  </div>
  )
}

function Friend(props){
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}

export default App;


