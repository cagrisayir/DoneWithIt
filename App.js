import { StyleSheet, View } from 'react-native';
import React from 'react';

import AppText from './app/components/AppText';

export default function App() {
	return (
		<View style={styles.container}>
			<AppText>I Love React Native!</AppText>
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
