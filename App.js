import {
	Text,
	SafeAreaView,
	Image,
	TouchableOpacity,
	Button,
	Alert,
} from 'react-native';
import styles from './styles';

export default function App() {
	const handlePress = () => console.log('Text Clicked');

	return (
		<SafeAreaView style={[styles.container, { backgroundColor: 'orange' }]}>
			<Text numberOfLines={1} onPress={handlePress}>
				Hello World!
			</Text>
			<TouchableOpacity onPress={() => console.log('Image tapped')}>
				<Image
					source={{ uri: 'https://picsum.photos/200/300' }}
					style={styles.image}
					// blurRadius={10}
				/>
			</TouchableOpacity>
			<Button
				title='Click Me'
				color={'navy'}
				onPress={() =>
					Alert.alert('My title', 'My message', [
						{ text: 'Yes', onPress: () => console.log('Yes') },
						{ text: 'No', onPress: () => console.log('No') },
					])
				}
			/>
			<Button
				title='Second button'
				color='red'
				onPress={() =>
					Alert.prompt('Second button', 'You clicked the second button', text =>
						console.log(text)
					)
				}
			/>
		</SafeAreaView>
	);
}
