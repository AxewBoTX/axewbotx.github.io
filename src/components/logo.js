import {Box,Link} from '@chakra-ui/react';
import {Link as RouterLink} from 'react-router-dom';

function Logo(){
	return (
		<Box as="button">
		<Link
		as={RouterLink} to="/"
		fontSize="35px"
		textDecoration="none"
		_hover={{textDecoration: "none"}}
		>AxewBoTX</Link>
		</Box>
	);
}

export default Logo;
