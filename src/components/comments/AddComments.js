import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableWithoutFeedback as TWF, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AddComments extends Component {
	constructor(props) {
		super(props);

		this.state = {
			comment: '',
			editMode: false,
			askComment: true
		};
	}

	handleAddComment = () => {
		Alert.alert('Comentário adicionado com sucess', this.state.comment);
	};

	render() {
		let commentArea = null;

		if (this.state.editMode) {
			commentArea = (
				<View style={styles.container}>
					<TextInput
						autoFocus
						placeholder="Pode comentar..."
						value={this.state.comment}
						onChangeText={(text) => this.setState({ ...this.state, comment: text })}
						onSubmitEditing={this.handleAddComment}
						style={styles.input}
					/>
					<TWF onPress={() => this.setState({ editMode: false })}>
						<Icon name="times" size={15} color="#555" />
					</TWF>
				</View>
			);
		} else {
			commentArea = (
				<TWF onPress={() => this.setState({ editMode: true })}>
					<View style={styles.container}>
						<Icon name="comment-o" size={25} color="#555" />
						<Text style={styles.caption}>Adicione um comentário</Text>
					</View>
				</TWF>
			);
		}

		return <View style={{ flex: 1 }}>{commentArea}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		margin: 10
	},
	caption: {
		marginLeft: 10,
		fontSize: 12,
		color: '#ccc'
	},
	input: {
		width: '90%'
	}
});
