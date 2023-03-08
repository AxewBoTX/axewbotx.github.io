import {
	Container,Heading,Text
} from '@chakra-ui/react';

function About(){
	return (
		<Container maxW="500px" mt="80px" p="0">
		<Heading fontSize="30px" variant="section-title" mb="8px">
		About
		</Heading>
		<Text>
		Helloo there! My name is Axew, atleast you can call me that. As a passionate high school student, I have already developed a keen interest in coding, gaming, and content creation. With my love for technology and innovation, I aspire to launch my own startup someday and contribute to the world of entrepreneurship.
		</Text>
		<Heading display="flex" alignItems="base-line" fontSize="30px" variant="section-title" mt="30px" mb="8px">
		I
		</Heading>
		</Container>
	);
}

export default About;
