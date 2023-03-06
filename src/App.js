import {Container} from '@chakra-ui/react';
import Navbar from './components/navbar.js';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
	  <Container>
	  <Navbar/>
	  </Container>
  );
}

export default App;
