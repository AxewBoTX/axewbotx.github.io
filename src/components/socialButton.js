import {
	Button,Link
} from '@chakra-ui/react';

function SocialButton(props){
	return(
		<Button
		as={Link}
		href={props.href} target="_blank" rel="noreferrer"
        size={'lg'}
        height={'50px'}
        width={'80%'}
        maxW={'400px'}
        fontSize={'25px'}
        colorScheme={props.colorScheme}
        leftIcon={props.icon}
        >{props.text}</Button>
	);
}

export default SocialButton;
