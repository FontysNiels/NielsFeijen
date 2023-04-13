import './App.css';
import Navigation from './components/navigation';
import About from './components/about';
import Background from './components/background';
import { BrowserRouter as Router } from
  'react-router-dom';
import TitleScreen from './components/title';

function App() {

  return (
    <Router>
      <Navigation />
      <TitleScreen/>
      <About/>
      <Background/>
    </Router>

  );
}

export default App;
