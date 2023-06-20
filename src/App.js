import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Play from './components/Play';
import Finish from './components/Finish';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/play' element={<Play/>} />
        <Route path='/finish' element={<Finish/>} />
      </Routes>
    </Router>
  );
}

export default App;
