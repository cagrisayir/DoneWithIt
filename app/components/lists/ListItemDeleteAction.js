import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

const ListItemDeleteAction = ({ handlePress }) => {
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				<MaterialCommunityIcons
					name='trash-can'
					size={35}
					color={colors.white}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

export default ListItemDeleteAction;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.danger,
		width: 70,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
