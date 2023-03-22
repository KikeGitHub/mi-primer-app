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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo userInfo={userInfo}/>
        <AdiosMundo userInfo={userInfo}/>
      </header>
    </div>
  );
}

export default App;
