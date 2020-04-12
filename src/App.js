import React from 'react';
import { View, Text } from 'react-native';
import Header from './components/header/Header';
import Post from './components/Post/Post';

export default function App() {
	const comments = [
		{
			nickName: 'Jéssica Rodrigues',
			comment: 'Olha que lindo isso!'
		}
	];

	return (
		<View style={{ flex: 1 }}>
			<Header />
			<Post image={require('../assets/imgs/fence.jpg')} comments={comments} />
		</View>
	);
}
