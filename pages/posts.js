import {
	Box,Heading,SimpleGrid
} from '@chakra-ui/react';
import GridItem from '/components/gridItem.js';
import MainLayout from '/lib/main';
import Section from 'components/section.js';
import Layout from 'lib/layout.js';

function Posts(){
	return (
		<MainLayout>
		<Layout>
		<Box>
		<Section delay={0.1}>
		<Heading variant="section-title" textUnderlineOffset="8px">
		Popular Posts
		</Heading>
		</Section>
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
		</Layout>
		</MainLayout>
	);
}

export default Posts;
