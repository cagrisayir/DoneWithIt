import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const Icon = ({
	name,
	size = 40,
	backgroundColor = '#000',
	iconColor = '#fff',
}) => {
	return (
		<View
			style={[
				styles.container,
				{
					width: size,
					height: size,
					borderRadius: size * 0.5,
					backgroundColor,
				},
			]}
		>
			<MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
		</View>
	);
};

export default Icon;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
});
