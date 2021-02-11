import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Image, Container } from 'react-bootstrap';
import Persona from './Components/Persona';
import Libro from './Components/Libro';
import Genero from './Components/Genero';

function App() {
  return (
    <div className="App">
      <Container className='mt-5'>
        <h1>DONDE ESTAN MIS LIBROS</h1>
        <Persona />
        <Libro />
        <Genero />
      </Container>
    </div>
  );
}

export default App;
