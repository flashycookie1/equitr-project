import {View, StyleSheet, Text} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import SearchBar from '@/components/SearchBar';
import Category from '@/components/Category';
import Article from '@/components/Article';

export default function SearchScreen() {
  const [searchValue, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topSec}>
        <SearchBar inputBar={setSearch} valueBar={searchValue} />
        <View
          style={{
            width: '100%',
            height: 28,
            // backgroundColor: 'green',
            flexDirection: 'row',
          }}>
          <Category name={'TRENDING'} selected={true} />
          <Category name={'TECHNOLOGY'} />
          <Category name={'PHARMACEUTICALS'} />
          <Category name={'AUTO'} />
        </View>
      </View>
      <View style={styles.bottomSec}>
        <Article />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#17150E',
  },
  topSec: {
    flex: 0,
    width: '86%',
    height: '15%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
    // backgroundColor: 'red',
  },
  bottomSec: {
    flex: 1,
    width: '86%',
    // backgroundColor: 'green',
  },
});
