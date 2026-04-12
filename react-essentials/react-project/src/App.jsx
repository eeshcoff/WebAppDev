import { useEffect, useReducer } from 'react';
import './App.css'
import chef from './images/chef.jpg'

function Header({name, year}) {
  return (
    <header>

      <h1>
        {name}'s Kitchen
      </h1>

      <p>
        Copyright {year} 
      </p>

    </header>
  );
}

const items = [
  'Filet',
  'New York Strip',
  'Ribeye',
  'Porterhouse',
  'T-Bone'
];

const dishOjbects = items.map((dish, i) => ({
  id: i,
  tile: dish
}));

console.log(dishOjbects);

function Main({ dishes, openStatus , onStatus}) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}>
          I want to be open</button>
        <h2>
          Welcome this wonderful restaurant!{" "}
        {openStatus ? "Open" : "Closed"}  
        </h2> 
      </div>

      <main>
        <img src={chef} 
        height="200" 
        alt="A photo of a smiling chef" />

      <ul>
        {dishes.map((dish) => (
          <li key={dish.id} style={{ listStyleType: "none" }}>
            {dish.tile}</li>
        ))}
      </ul>

      </main>
    </>
  );
} 

function App() {

  // const [status, setStatus] = useState("True");
  const [status, toggle] = useReducer(
    (status) => !status, 
    true
  );

  useEffect(() => {
    console.log(`The restaurant is currently ${status ? "Open" : "Closed"}.`);
  }, [status]);

  return (
    <div>
      <h1>The restaurant is currently {" "}
        {status ? "Open" : "Closed"}
      </h1>
      <button onClick={toggle}>
        {status ? "Close" : "Open"} Restaurant
      </button>
    <Header name="Jane" year={new Date().getFullYear()} />
    <Main 
      dishes={dishOjbects} 
      openStatus={status} 
      onStatus={toggle}/>
    </div>
  );
}

export default App
