import { useEffect } from 'react';
import './App.css';
import RequestBlockData from './components/RequestBlockData/RequestBlockData';
import Weather from './components/Weather/Weather';

function App() {
  return (
    <div className="App visual-data">
      <RequestBlockData />
      <Weather />
    </div>
  );
}

export default App;
