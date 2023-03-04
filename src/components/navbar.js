import {
	Box,IconButton,Text,Heading
} from '@chakra-ui/react';
import {useColorMode} from '@chakra-ui/color-mode';
import {MoonIcon,SunIcon} from '@chakra-ui/icons';

function Navbar(){
	const {colorMode,toggleColorMode} = useColorMode();
	return (
		<Box
		display={'flex'}
		maxW={'100%'}
		alignItems={'center'}
		justifyContent={'space-between'}
		>
		<Text
		>AxewBoTX</Text>
		<IconButton
		onClick={() => toggleColorMode()}
		icon={colorMode == 'dark' ? <SunIcon/> : <MoonIcon/>}
		colorScheme={colorMode == 'dark' ? 'orange' : 'purple'}
		/>
		</Box>
	);
}

export default Navbar;
