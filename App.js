import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={navigationTheme}>
			<AuthNavigator />
		</NavigationContainer>
	);
}
