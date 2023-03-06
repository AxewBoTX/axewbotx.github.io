import {Box} from '@chakra-ui/react';
import {useState,useEffect} from 'react';
import Logo from './logo.js';
import ThemeButton from './themeButton.js'

function SmallNavbar(){
	return (
		<Box>
		SmallNavbar
		</Box>
	);
}
function BigNavbar(){
	return (
		<Box>
		<Logo/>
		</Box>
	);
}
function Navbar(){
	const[width,setWidth] = useState(window.innerWidth);
	useEffect(function(){
		function handleWindowResize(){
			setWidth(window.innerWidth);
		}
		window.addEventListener('resize',handleWindowResize);
		return () => {
			window.removeEventListener('resize',handleWindowResize);
		}
	})
	return (
		<Box>
		{width >= 1200 ? <BigNavbar/> : <SmallNavbar/>}
		</Box>
	);
}

export default Navbar;
