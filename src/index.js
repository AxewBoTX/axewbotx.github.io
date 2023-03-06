import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fontsource/m-plus-rounded-1c/500.css";
import App from './App';
import {ChakraProvider,ColorModeScript} from '@chakra-ui/react';
import theme from './theme.js';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
	<ChakraProvider theme={theme}>
	<ColorModeScript initialColorMode={theme.config.initialColorMode}/>
    <App />
	</ChakraProvider>
	</BrowserRouter>
);
