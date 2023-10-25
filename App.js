import { StyleSheet, View } from 'react-native';
import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import AppText from './app/components/AppText';

export default function App() {
	return (
		<View style={styles.container}>
			<AppText>I Love React Native!</AppText>
			<AntDesign name='mail' size={24} color='black' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
