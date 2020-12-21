import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/layouts/Nav';
import Home from './components/pages/Home';
import Footer from './components/layouts/Footer';
import SearchModal from './components/layouts/SearchModal';

function App() {

  return (
    <div className="App">
      <Router>
        <SearchModal />
        <Nav />
        <Home />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
