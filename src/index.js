import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ColorModeScript} from '@chakra-ui/color-mode';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ChakraProvider theme={theme}>
	<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
	</ChakraProvider>
);
