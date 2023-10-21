import { StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},

	image: {
		width: 200,
		height: 300,
		borderRadius: 10,
	},
});

export default styles;
