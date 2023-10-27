import { StyleSheet } from 'react-native';
import React from 'react';
import { useFormikContext } from 'formik';

import AppButton from '../AppButton';

const SubmitButton = ({ title }) => {
	const { handleSubmit } = useFormikContext();
	return <AppButton text={title} handlePress={handleSubmit} />;
};

export default SubmitButton;

const styles = StyleSheet.create({});
