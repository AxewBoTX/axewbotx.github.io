import {
	Box,Text,LinkBox,LinkOverlay,Image
} from '@chakra-ui/react';

function GridItem(props){
	return (
		<Box w="100%" align="center">
		<LinkBox cursor="pointer">
		<Image 
		alt={props.title}
		placeholder="blue"
		loading="lazy"
		borderRadius="12px"
		src={props.thumbnail}/>
		<LinkOverlay href={props.href} target="_blank">
		<Text mt={2}>{props.title}</Text>
		</LinkOverlay>
		<Text fontSize="14">{props.children}</Text>
		</LinkBox>
		</Box>
	);
}

export default GridItem;
