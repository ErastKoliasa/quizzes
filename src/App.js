import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Play from './components/Play/Play';
import Finish from './components/Finish/Finish';
import Stats from './components/Stats/Stats';
function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/play' element={<Play />} />
          <Route path='/finish' element={<Finish />} />
          <Route path='/stats' element={<Stats />} />
        </Routes>
      </Router>
  );
}

export default App;
