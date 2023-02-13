import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Container from './components/container';

function App() {
  return (
    <div className="App">
      <Container >
        HI
      </Container>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
