import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import colors from '../config/colors';

const AppButton = ({ text, handlePress, clr = 'primary' }) => {
	return (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: colors[clr] }]}
			onPress={handlePress}
		>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
};

export default AppButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		borderRadius: 25,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 15,
		width: '100%',
	},

	text: {
		color: colors.white,
		fontSize: 18,
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});
