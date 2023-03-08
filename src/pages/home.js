import {
	Box
} from '@chakra-ui/react';
import Profile from '../components/profile.js';
import About from '../components/about.js';

function Home(){
	return (
		<Box>
		<Profile/>
		<About/>
		</Box>
	);
}

export default Home;
