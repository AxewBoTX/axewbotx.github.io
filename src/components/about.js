import {
	Container,Heading,Text,Link,useColorModeValue,
} from '@chakra-ui/react';
import Footer from './footer.js';
import WebProfiles from './web_profiles.js';

function About(){
	return (
		<Container maxW="600px" mt="80px" p="0">
		<Heading variant="section-title">
		About
		</Heading>
		<Text lineHeight="30px" textAlign="justify" textIndent="1em">
		Helloo there! My name is Axew, atleast you can call me that. I'm a high school student with a passion for coding, gaming, and making YouTube videos. My ultimate goal is to start my own startup one day, where I can turn my hobbies into a successful business. 
		I currently own a Youtube Channel with the name of <Link href="https://youtube.com/@AxewBoTX" color={useColorModeValue('#3d7aed','#ff63c3')}>AxewTV</Link>  where I post videos with a mix of Coding and Minecraft.
		</Text>
		<Heading display="flex" alignItems="base-line" variant="section-title" mt="30px">
		I♥
		</Heading>
		<Text lineHeight="30px" textAlign="justify" textIndent="1em">As a tech enthusiast, I spend my free time coding, gaming, and producing videos that showcase my love for cutting-edge technology and innovation. I'm always on the lookout for exciting new ways to expand my knowledge and skills.</Text>
		<WebProfiles/>
		<Footer/>
		</Container>
	);
}

export default About;
