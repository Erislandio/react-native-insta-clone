import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Header from '../components/header/Header';
import Post from '../components/Post/Post';

export default class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [
				{
					id: Math.random(),
					nickName: 'Edson Soares',
					email: 'edson.soares@outlook.com',
					image: require('../../assets/imgs/fence.jpg'),
					comments: [
						{
							nickName: 'Maria do Nascimento',
							comment: 'Olá só, que bacana :-)'
						},
						{
							nickName: 'Jéssica Rogrigues',
							comment: 'Que lugar lindo!'
						}
					]
				},
				{
					id: Math.random(),
					nickName: 'Edson Soares',
					email: 'edson.soares@outlook.com',
					image: require('../../assets/imgs/fence.jpg'),
					comments: [
						{
							nickName: 'Maria do Nascimento',
							comment: 'Olá só, que bacana :-)'
						},
						{
							nickName: 'Jéssica Rogrigues',
							comment: 'Que lugar lindo!'
						}
					]
				},
				{
					id: Math.random(),
					nickName: 'Edson Soares',
					email: 'edson.soares@outlook.com',
					image: require('../../assets/imgs/fence.jpg'),
					comments: [
						{
							nickName: 'Maria do Nascimento',
							comment: 'Olá só, que bacana :-)'
						},
						{
							nickName: 'Jéssica Rogrigues',
							comment: 'Que lugar lindo!'
						}
					]
				}
			]
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<FlatList
					data={this.state.posts}
					keyExtractor={(item) => `${item.id}`}
					renderItem={({ item }) => {
						return <Post key={item.id} {...item} />;
					}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f5fcff'
	}
});
