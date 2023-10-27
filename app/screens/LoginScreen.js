import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo} />
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => console.log(values)}
			>
				{({ handleChange, handleSubmit }) => (
					<>
						<AppTextInput
							placeholder='Email'
							autoCorrect={false}
							keyboardType='email-address'
							autoCapitalize='none'
							textContentType='emailAddress'
							icon='email'
							onChangeText={handleChange('email')}
						/>
						<AppTextInput
							placeholder='Password'
							autoCorrect={false}
							icon='lock'
							autoCapitalize='none'
							textContentType='password'
							secureTextEntry
							onChangeText={handleChange('password')}
						/>
						<AppButton text='Login' handlePress={handleSubmit} />
					</>
				)}
			</Formik>
		</Screen>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},

	logo: {
		width: 80,
		height: 80,
		alignSelf: 'center',
		marginTop: 50,
	},
});
