import {extendTheme} from '@chakra-ui/react';
import {mode} from '@chakra-ui/theme-tools';

const styles = {
	global: props => ({
		body: {
			bg: mode('#f0e7db','#202023')(props)
		}
	})
}
const fonts = {
	heading: "'M PLUS ROUNDED 1c",
	body: "'M PLUS ROUNDED 1c",
}
const config = {
	initialColorMode: 'dark',
}

const theme = extendTheme({
	styles, fonts, config
})

export default theme
