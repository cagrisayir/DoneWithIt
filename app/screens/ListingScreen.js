import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Screen from '../components/Screen';
import Card from '../components/Card';
import routes from '../navigation/routes';

const listings = [
	{
		id: 1,
		title: 'Red jacket for sale',
		price: 100,
		image: require('../assets/jacket.jpg'),
	},
	{
		id: 2,
		title: 'Couch in great condition',
		price: 1000,
		image: require('../assets/couch.jpg'),
	},
];

const ListingScreen = ({ navigation }) => {
	return (
		<Screen style={styles.screen}>
			<FlatList
				data={listings}
				keyExtractor={listing => listing.id.toString()}
				renderItem={({ item }) => (
					<Card
						title={item.title}
						subTitle={'$' + item.price}
						image={item.image}
						onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
					/>
				)}
			/>
		</Screen>
	);
};

export default ListingScreen;

const styles = StyleSheet.create({
	screen: {
		padding: 20,
		backgroundColor: '#f8f4f4',
		flex: 1,
	},
});
