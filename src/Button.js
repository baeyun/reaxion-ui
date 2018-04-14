import React from 'react'
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import RESS from '@bukharim96/ress'

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
				paddingTop: 8,
				paddingBottom: 8,
				paddingLeft: 12,
				paddingRight: 12,
				marginBottom: 10
			},
			
			primary: { backgroundColor: '#007bff', borderColor: '#007bff' },
			danger:  { backgroundColor: '#dc3545', borderColor: '#dc3545' },
			warning: { backgroundColor: '#ffa500', borderColor: '#ffa500' },
			
			'primary, danger, warning': {
				round: { borderRadius: 50 },
				outlined: {
					backgroundColor: 'transparent'
				}
			}
		}),
		btnTextStyles = new RESS(props, {
			default: { color: '#333' },
			'primary, danger, warning': { color: '#fff' },
			outlined: {
				primary: { color: '#007bff' },
				danger:  { color: '#dc3545' },
				warning: { color: '#ffa500' }
			}
		})

	// Markup
	return (
		<TouchableOpacity style={[btnStyles, style]} {...restOfProps}>
			<Text
				style={btnTextStyles}
				children={children && children.toUpperCase()} />
		</TouchableOpacity>
	)
}
