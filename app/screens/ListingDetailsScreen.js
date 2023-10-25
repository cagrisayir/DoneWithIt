import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import AppText from '../components/AppText';
import colors from '../config/colors';

const ListingDetailsScreen = () => {
	return (
		<View>
			<Image style={styles.image} source={require('../assets/jacket.jpg')} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>Red jacket for sale</AppText>
				<AppText style={styles.price}>$100</AppText>
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
	title: {
		fontSize: 24,
		fontWeight: '500',
	},
});
