import React, { useState } from 'react';

import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
];

export default function App() {
	const [category, setCategory] = useState();
	return (
		<Screen>
			<AppPicker
				selectedItem={category}
				onSelectItem={item => setCategory(item)}
				icon='apps'
				placeholder='Category'
				items={categories}
			/>
		</Screen>
	);
}
