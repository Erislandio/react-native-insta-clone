import React, { Component } from 'react';
import { Platform, View, Image, Text, StyleSheet } from 'react-native';
import icon from '../../../assets/imgs/icon.png';

class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.rowContainer}>
					<Image source={icon} style={styles.image} />
					<Text style={styles.title}>Clone</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		margin: Platform.OS === 'ios' ? 20 : 0,
		padding: 10,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#bbb',
		width: '100%'
	},
	rowContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%'
	},
	image: {
		height: 30,
		width: 30,
		resizeMode: 'contain'
	},
	title: {
		color: '#000',
		fontFamily: 'shelter',
		height: 30,
		fontSize: 28
	}
});

export default Header;
