import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label('Email'),
	password: Yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
	return (
		<Screen style={styles.container}>
			<Image source={require('../assets/logo-red.png')} style={styles.logo} />
			<Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={values => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppTextInput
							placeholder='Email'
							autoCorrect={false}
							keyboardType='email-address'
							autoCapitalize='none'
							textContentType='emailAddress'
							icon='email'
							onChangeText={handleChange('email')}
							onBlur={() => setFieldTouched('email')}
						/>
						<ErrorMessage error={errors.email} visible={touched.email} />

						<AppTextInput
							placeholder='Password'
							autoCorrect={false}
							icon='lock'
							autoCapitalize='none'
							textContentType='password'
							secureTextEntry
							onChangeText={handleChange('password')}
							onBlur={() => setFieldTouched('password')}
						/>
						<ErrorMessage error={errors.password} visible={touched.password} />

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
		marginVertical: 50,
	},
});
