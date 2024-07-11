import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Category({name, selected}) {
  return (
    <View
      style={[styles.container, {borderColor: selected ? 'white' : '#282621'}]}>
      {name == 'TRENDING' ? (
        <Icon name={'trending-up'} color={'white'} />
      ) : null}
      <Text style={[styles.tagName, {marginLeft: name == 'TRENDING' ? 3 : 0}]}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'white',
    marginRight: 8,
  },
  tagName: {
    fontFamily: 'Cascadia',
    fontSize: 9,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
  },
});
