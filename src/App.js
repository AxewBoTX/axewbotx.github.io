import {
	Container
} from '@chakra-ui/react';
import Navbar from './components/navbar.js'

function App() {
  return (
	  <Container maxW='container.md' bg='red'>
	  <Navbar/>
	  </Container>
  );
}

export default App;
