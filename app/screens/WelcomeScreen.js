import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';

const WelcomeScreen = ({ navigation }) => {
	return (
		<ImageBackground
			blurRadius={5}
			style={styles.background}
			source={require('../assets/background.jpg')}
		>
			<View style={styles.logoContainer}>
				<Image source={require('../assets/logo-red.png')} style={styles.logo} />
				<Text style={styles.tagLine}>Sell What You Don't Need</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<AppButton
					text='Login'
					handlePress={() => navigation.navigate('Login')}
				/>
				<AppButton
					text='Register'
					handlePress={() => navigation.navigate('Login')}
					clr='secondary'
				/>
			</View>
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
	buttonsContainer: {
		padding: 20,
		width: '100%',
		gap: 10,
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
	tagLine: {
		fontSize: 25,
		fontWeight: '600',
		paddingVertical: 20,
	},
});
