import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

export default function Autor({ email, nickName }) {
	return (
		<View style={styles.container}>
			<Gravatar style={styles.avatar} options={{ email, secure: true }} />
			<Text style={styles.nickName}>{nickName}</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar: {
		height: 30,
		width: 30,
		borderRadius: 15,
		marginHorizontal: 15
	},
	nickName: {
		color: '#444',
		marginVertical: 10,
		fontSize: 15,
		fontWeight: 'bold'
	}
});
