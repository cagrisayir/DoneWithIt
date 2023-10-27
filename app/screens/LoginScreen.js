import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo} />
			<AppForm
				initialValues={{ email: '', password: '' }}
				onSubmit={values => console.log(values)}
				validationSchema={validationSchema}
			>
				<AppFormField
					name='email'
					placeholder='Email'
					autoCorrect={false}
					keyboardType='email-address'
					autoCapitalize='none'
					textContentType='emailAddress'
					icon='email'
				/>

				<AppFormField
					name='password'
					placeholder='Password'
					autoCorrect={false}
					icon='lock'
					autoCapitalize='none'
					textContentType='password'
					secureTextEntry
				/>

				<SubmitButton title='login' />
			</AppForm>
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
		marginVertical: 50,
	},
});
