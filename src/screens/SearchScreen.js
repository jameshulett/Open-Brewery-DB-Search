import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import obdb from '../api/obdb';

const SearchScreen = () => {
	const [term, setTerm] = useState('');
	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={newTerm => setTerm(newTerm)}
				onTermSubmit={() => console.log('submitted')}
			/>
			<Text>Search Screen</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
