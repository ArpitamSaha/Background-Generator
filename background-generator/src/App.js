import './App.css';
import Gradient from './Components/Gradient/Gradient';
import StaticColor from './Components/SingleColour/StaticColor';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<StaticColor />} />
        <Route path='/Gradient' element={<Gradient />} />
      </Routes>


    </>
  );
}

export default App;
