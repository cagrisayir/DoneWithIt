import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';

const Screen = ({ children, style }) => {
	return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

export default Screen;

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});
