import {
	Box,Heading,SimpleGrid
} from '@chakra-ui/react';
import GridItem from '../components/gridItem.js';

function Posts(){
	return (
		<Box>
		<Heading variant="section-title" textUnderlineOffset="8px">
		Popular Posts
		</Heading>
		<SimpleGrid columns={[1,2,2]} gap="6" mt="50px">
		<GridItem title="I Coded A Girl In Minecraft..."
		thumbnail='https://i.ytimg.com/vi/j6yKkEK_slI/maxresdefault.jpg'
		href="https://www.youtube.com/watch?v=j6yKkEK_slI&t=55s"
		/>
		<GridItem title="I Learned Minecraft Coding In 48 Hours..."
		thumbnail='https://i.ytimg.com/vi/DUZXCDBxqpY/maxresdefault.jpg'
		href="https://www.youtube.com/watch?v=DUZXCDBxqpY"
		/>
		</SimpleGrid>
		</Box>
	);
}

export default Posts;
