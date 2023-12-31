import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
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
	const [messages, setMessages] = useState(initialMessages);
	const [refreshing, setRefreshing] = useState(false);

	const handleDelete = message => {
		// Delete the message from messages
		setMessages(messages.filter(m => m.id !== message.id));
	};
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
						handleRightAction={() => (
							<ListItemDeleteAction handlePress={() => handleDelete(item)} />
						)}
					/>
				)}
				ItemSeparatorComponent={ListItemSeparator}
				refreshing={refreshing}
				onRefresh={() =>
					setMessages([
						{
							id: 2,
							title: 'T2',
							description: 'D2',
							image: require('../assets/omer.jpeg'),
						},
					])
				}
			/>
		</Screen>
	);
};

export default MessagesScreen;

const styles = StyleSheet.create({});
