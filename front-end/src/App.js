
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import './App.css';

//components

import Footer from './components/layouts/Footer'
import Container from './components/layouts/Container'

//pages
import Dashboard from './components/pages/dashboard/Dashboard'
import Painel from './components/pages/painel/Painel'

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
            <Routes>
            <Route path="/" element={<Painel/>} />
              <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
