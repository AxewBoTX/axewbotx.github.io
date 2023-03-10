import {
	Box,Text,LinkBox,LinkOverlay,Image,Global
} from '@chakra-ui/react';

function GridItem({children,href,thumbnail,title}){
	return (
		<Box w="100%" align="center">
		<LinkBox cursor="pointer">
		<Image 
		alt={title}
		placeholder="blue"
		loading="lazy"
		borderRadius="12px"
		src={thumbnail}/>
		<LinkOverlay href={href} target="_blank">
		<Text mt={2}>{title}</Text>
		</LinkOverlay>
		<Text fontSize="14">{children}</Text>
		</LinkBox>
		</Box>
	);
}

export default GridItem;
