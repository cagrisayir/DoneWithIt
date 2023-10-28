import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

const ListingDetailsScreen = ({ route }) => {
	const listing = route.params;
	return (
		<View>
			<Image style={styles.image} source={listing.image} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.price}>${listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						title='Omer Cagri'
						subTitle='5 Listing'
						image={require('../assets/omer.jpeg')}
					/>
				</View>
			</View>
		</View>
	);
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 20,
		marginVertical: 10,
	},
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 300,
	},
	userContainer: {
		marginVertical: 40,
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
});
