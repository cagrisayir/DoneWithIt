import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={styles.screen}>
			<View style={style}>{children}</View>
		</SafeAreaView>
	);
};

export default Screen;

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});
