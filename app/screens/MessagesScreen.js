import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';

const messages = [
	{
		id: 1,
		title: 'T1',
		description: 'D1',
		image: require('../assets/omer.jpeg'),
	},
	{
		id: 2,
		title: 'T2',
		description: 'D2',
		image: require('../assets/omer.jpeg'),
	},
];

const MessagesScreen = () => {
	return (
		<SafeAreaView>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
					/>
				)}
			/>
		</SafeAreaView>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
