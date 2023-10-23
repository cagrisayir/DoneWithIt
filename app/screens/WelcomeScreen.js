import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
	return (
		<ImageBackground
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/logo-red.png')} style={styles.logo} />
				<Text>Sell What You Don't Need</Text>
			</View>
			<View style={styles.registerButton}></View>
			<View style={styles.loginButton}></View>
		</ImageBackground>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	background: {
		flex: 1,
		flexDirection: 'column-reverse',

		alignItems: 'center',
	},

	loginButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#fc5c65',
	},

	registerButton: {
		width: '100%',
		height: 70,
		backgroundColor: '#4ecdc4',
	},

	logo: {
		width: 100,
		height: 100,
	},

	logoContainer: {
		position: 'absolute',
		top: 120,
		alignItems: 'center',
	},
});
