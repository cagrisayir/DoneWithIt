import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
	AppForm,
	AppFormField,
	SubmitButton,
	AppFormPicker,
	FormImagePicker,
} from '../components/forms';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';

const ListingEditScreen = () => {
	const validationSchema = Yup.object().shape({
		title: Yup.string().required().min(1).label('Title'),
		price: Yup.number().required().min(1).max(10000).label('Price'),
		description: Yup.string().label('Description'),
		category: Yup.object().required().nullable().label('Category'),
		images: Yup.array().min(1, 'Please select at least one image.'),
	});

	const categories = [
		{ label: 'Furniture', value: 1 },
		{ label: 'Clothing', value: 2 },
		{ label: 'Camera', value: 3 },
	];

	const location = useLocation();

	return (
		<Screen style={styles.container}>
			<AppForm
				initialValues={{
					title: '',
					price: '',
					description: '',
					category: null,
					images: [],
				}}
				onSubmit={() => console.log(location)}
				validationSchema={validationSchema}
			>
				<FormImagePicker name='images' />

				<AppFormField maxLength={255} name='title' placeholder='Title' />
				<AppFormField
					keyboardType='numeric'
					maxLength={8}
					name='price'
					placeholder='Price'
				/>
				<AppFormPicker
					items={categories}
					name='category'
					placeholder='Category'
				/>
				<AppFormField
					maxLength={255}
					multiline
					name='description'
					numberOfLines={3}
					placeholder='Description'
				/>
				<SubmitButton title='Post' />
			</AppForm>
		</Screen>
	);
};

export default ListingEditScreen;

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
});
