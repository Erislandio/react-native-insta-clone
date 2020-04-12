import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Comments from '../comments/Comments';
import Autor from '../Autor/Autor';
import AddComments from '../comments/AddComments';

class Post extends Component {
	render() {
		const { image, comments } = this.props;

		return (
			<View style={styles.container}>
				<Image source={image} style={styles.image} />
				<Autor email={this.props.email} nickName={this.props.nickName} />
				<Comments comments={comments} />
				<AddComments />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').width * 3 / 4,
		resizeMode: 'contain'
	}
});

export default Post;
