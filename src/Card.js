import React from 'react'
import { View, Text, image, StyleSheet } from 'react-native'
import RESS from '@bukharim96/ress'

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
				minHeight: 10,
				marginLeft: 10,
				marginRight: 10,
				backgroundColor: '#fff',
				borderColor: '#eaeaea',
				borderWidth: 1,
				borderStyle: 'solid',
				borderRadius: 3,
				padding: 15
			}
		})

	const styles = {
		cardHeaderStyles = {
			alignItems: 'center',
			paddingBottom: 10,
			borderColor: '#eaeaea',
			borderBottomWidth: 1
		},
		cardFeaturedImgStyles = {
			flex: 1,
			alignSelf: 'stretch'
		},
		cardFooterStyles = {
			flex: 1
		}
	}

	// Markup
	return (
		<View
			style={[cardStyles, style]}
			{...restOfProps}
			children={children && children}
		/>
	)
}

