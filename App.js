import { StyleSheet, View } from 'react-native';
import React from 'react';

import AppButton from './app/components/AppButton';

export default function App() {
	return (
		<View style={styles.container}>
			<AppButton text='Login' handlePress={() => console.log('Tapped')} />
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
