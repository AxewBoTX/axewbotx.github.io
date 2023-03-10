import {
	ChakraProvider,Container,Flex
} from '@chakra-ui/react';
import theme from '/lib/theme.js';
import '@fontsource/m-plus-rounded-1c/500.css';
import Navbar from '/components/navbar.js';
import {AnimatePresence} from 'framer-motion';

export default function App({ Component, pageProps }) {
  return( 
	  <ChakraProvider theme={theme}>
	  <Container maxW="100%" m="0" p="0">
	  <Flex position="sticky" top="0" right="0" left="0" mb="60px"
	  style={{backdropFilter: 'blur(20px)'}}
	  zIndex={1}
	  >
	  <Navbar/>
	  </Flex>
	  <Container maxW="1000px">
	  <AnimatePresence initial={true}>
	  <Component {...pageProps} />
	  </AnimatePresence>
	  </Container>
	  </Container>
	  </ChakraProvider>
  );
}
