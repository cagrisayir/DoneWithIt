import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name='Listing' component={ListingScreen} />
		<Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
	</Stack.Navigator>
);

export default FeedNavigator;
