import React from 'react';

import ListingScreen from './app/screens/ListingScreen';
import Screen from './app/components/Screen';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
	return (
		<Screen>
			<AppTextInput placeholder='username' icon='email' />
		</Screen>
	);
}
