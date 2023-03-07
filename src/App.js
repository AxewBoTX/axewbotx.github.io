import {Container,Flex,useColorModeValue} from '@chakra-ui/react';
import Navbar from './components/navbar.js';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/home.js';
import Posts from './pages/posts.js';
import Contact from './pages/contact.js';

function App() {
  return (
	  <Container maxW="100%" m="0" p="0">
	  <Flex position="sticky" top="0" right="0" left="0"
	  bg={useColorModeValue('#ffffff40','#20202480')}
	  style={{backdropFilter: 'blur(20px)'}}
	  zIndex={1}
	  >
	  <Navbar/>
	  </Flex>
	  <Container maxW="1000px">
	  <Routes>
	  <Route path="/" element={<Home/>}/>
	  <Route path="/posts" element={<Posts/>}/>
	  <Route path="/contact" element={<Contact/>}/>
	  </Routes>
	  </Container>
	  </Container>
  );
}

export default App;
