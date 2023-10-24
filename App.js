import { StyleSheet, View } from 'react-native';
import AppButton from './app/components/AppButton';

export default function App() {
	return (
		<View>
			<AppButton title='Login' onPress={() => console.log('tapped')} />
		</View>
	);
}

const styles = StyleSheet.create({});
