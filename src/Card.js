import React from 'react'
import { View, Text, image, StyleSheet } from 'react-native'
import RESS from '@bukharim96/ress'
import theme from './theme'

// Stateless Button Component
export default (props) => {
	let {
			header,
			footer,
			featuredImgSrc,
			style,
			children,
			...restOfProps
		} = props
		
	let cardStyles = new RESS(props, {
			default: {
				alignSelf: 'stretch',
				margin: 12,
				marginHorizontal: 5,
				padding: 20,
				backgroundColor: '#fff',
				borderRadius: 3,
				overflow: 'hidden',
				shadowColor: '#000',
				shadowOffset: { width: 1, height: 2 },
				shadowRadius: 3,
				shadowOpacity: .15,

				// android (Android +5.0)
				elevation: 2
			},
			header: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingVertical: 12,
				marginHorizontal: -20,
				marginTop: -20,
				marginBottom: 20,
				borderWidth: 0,
				borderColor: theme.colors.lightGray,
				borderStyle: 'solid',
				borderBottomWidth: 1,
				borderBottomRightRadius: 0,
				borderBottomLeftRadius: 0,
				elevation: 0
			},
			footer: {
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between',
				paddingVertical: 12,
				marginHorizontal: -20,
				marginTop: 20,
				marginBottom: -20,
				borderWidth: 0,
				borderColor: theme.colors.lightGray,
				borderStyle: 'solid',
				// borderTopWidth: 1,
				borderTopRightRadius: 0,
				borderTopLeftRadius: 0,
				elevation: 0
			}
		})

	// Markup
	return (
		<View
			style={[cardStyles, style]}
			{...restOfProps}
			children={children && children}
		/>
	)
}

