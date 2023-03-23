import React , { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';

function App() {

  const userInfo = {
    name : "Kike",
    edad: 40,
    desc : "Este es mi primer objeto",
    apellido : "Duran"
  }

  const [count, setCount] = useState(0);

  const increaseCounter = () =>{
    setCount(count + 1);
  };


  const saludarFn = name => {
    console.log("Hola " + name);
  }

  useEffect( () =>{
    console.log("contador " + count);
  }, [count]
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo userInfo={userInfo}/>
        <h3>contador = {count}</h3>
        <button onClick={increaseCounter}>Contador</button>
      </header>
    </div>
  );
}

export default App;
