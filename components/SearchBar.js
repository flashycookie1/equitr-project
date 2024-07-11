import {Text, View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function SearchBar({inputBar, valueBar}) {
  return (
    <View style={styles.container}>
      <Icon name={'search'} size={18} color={'white'} />
      <TextInput
        style={styles.inputSec}
        onChange={inputBar}
        value={valueBar}
        placeholder="Search"
        placeholderTextColor={'white'}
        textAlign="left"
        multiline={false}
        numberOfLines={1}
        inputMode="text"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#282621',
    paddingLeft: 15,
  },
  inputSec: {
    flex: 1,
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    marginLeft: 8,
  },
});
