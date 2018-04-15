import React from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import RESS from '@bukharim96/ress'
import theme from './theme'

// Stateless Button Component
export default (props) => {
	let {
			style,
			children,
			...restOfProps
		} = props
		
	let btnStyles = new RESS(props, {
			default: {
				alignSelf: 'flex-start',
				alignItems: 'center',
				backgroundColor: '#eee',
				borderRadius: 3,
				borderColor: '#eee',
				borderStyle: 'solid',
				borderWidth: 2,
				justifyContent: 'center',
				paddingVertical: 7,
				paddingHorizontal: 12,
				minWidth: 40
			},
			
			primary: { backgroundColor: theme.colors.blue, borderColor: theme.colors.blue },
			success: { backgroundColor: theme.colors.green, borderColor: theme.colors.green },
			warning: { backgroundColor: theme.colors.yello, borderColor: theme.colors.yello },
			danger:  { backgroundColor: theme.colors.red, borderColor: theme.colors.red },
			light:   { backgroundColor: 'transparent', borderColor: 'transparent' },
			
			'primary, danger, warning': {
				round: { borderRadius: 50 },
				outlined: {
					backgroundColor: 'transparent'
				}
			}
		}),
		btnTextStyles = new RESS(props, {
			default: { color: '#333' },
			'primary, success, danger, warning': { color: '#fff' },
			light: { color: theme.colors.blue },
			outlined: {
				primary: { color: theme.colors.blue },
				success: { color: theme.colors.green },
				warning: { color: theme.colors.yello },
				danger:  { color: theme.colors.red }
			}
		})

	// Markup
	return (
		<TouchableOpacity style={[btnStyles, style]} {...restOfProps}>
			<Text
				style={btnTextStyles}
				// Transform text to uppercase
				children={children && children.toUpperCase()}
			/>
		</TouchableOpacity>
	)
}
