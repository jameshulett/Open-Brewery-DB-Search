import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 10,
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: 'row'
	},
	inputStyle: {
		flex: 1,
		fontSize: 18
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15
	}
});

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
	<View style={styles.backgroundStyle}>
		<Feather name='search' style={styles.iconStyle} />
		<TextInput
			autoCapitalize='none'
			autoCorrect={false}
			style={styles.inputStyle}
			placeholder='Search'
			value={term}
			onChangeText={onTermChange}
			onEndEditing={onTermSubmit}
		/>
	</View>
);

export default SearchBar;
