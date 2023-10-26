import {
	Image,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from 'react-native';
import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import colors from '../config/colors';

const ListItem = ({
	title,
	subTitle,
	image,
	handlePress,
	handleRightAction,
}) => {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={handleRightAction}>
				<TouchableHighlight underlayColor={colors.light} onPress={handlePress}>
					<View style={styles.container}>
						<Image style={styles.image} source={image} />
						<View>
							<Text style={styles.title}>{title}</Text>
							<Text style={styles.subTitle}>{subTitle}</Text>
						</View>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 15,
	},

	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: '500',
	},
});
