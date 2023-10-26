import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/ListItemSeparator';

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
		<Screen>
			<FlatList
				data={messages}
				keyExtractor={message => message.id.toString()}
				renderItem={({ item }) => (
					<ListItem
						title={item.title}
						subTitle={item.description}
						image={item.image}
						handlePress={() => console.log('Message selected', item)}
					/>
				)}
				ItemSeparatorComponent={<ListItemSeparator />}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
