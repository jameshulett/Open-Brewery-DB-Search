import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import obdb from '../api/obdb';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await obdb.get('/search', {
      params: {
        name: term,
      },
    });
    setResults(response.data);
    console.log('response is: ', response);
    console.log('data is: ', response.data);
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>Search Screen</Text>
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
