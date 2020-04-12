import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, Dimensions } from 'react-native';

export default class Comments extends Component {
	render() {
		let view = null;

		if (this.props.comments) {
			view = this.props.comments.map((item, index) => {
				return (
					<View style={styles.commentsContainer} key={index}>
						<Text style={styles.nickName}>{item.nickName}: </Text>
						<Text style={styles.comment}>{item.comment}</Text>
					</View>
				);
			});
		}

		return <View style={styles.container}>{view}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10
	},
	commentsContainer: {
		flexDirection: 'row',
		marginTop: 5
	},
	nickName: {
		marginHorizontal: 5,
		fontWeight: 'bold',
		color: '#444'
	},
	comment: {
		color: '#555'
	}
});
