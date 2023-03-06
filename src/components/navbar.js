import {Box} from '@chakra-ui/react';
import {useState,useEffect} from 'react';

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
		BigNavbar
		</Box>
	);
}

function Navbar(){
	const [width,setWidth] = useState();
	return (
		<Box fontSize="40px">
		</Box>
	);
}

export default Navbar;
