import './App.css';
import { Routes, Route } from 'react-router-dom';
import LeftHeader from './Components/Left-Header/Header';
import RightHeader from './Components/RIght-Header/index';

function App() {
  return (
    <div className="App">
      <LeftHeader />
      <RightHeader />
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
