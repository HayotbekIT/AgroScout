import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
// import Container from './components/container';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
