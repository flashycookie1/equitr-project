import {View, Text, StyleSheet} from 'react-native';

export default function Ticker({name, percent}) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 13,
          fontFamily: 'CascadiaMonoPL-SemiBold',
          color: 'white',
        }}>
        {name}
      </Text>
      <View
        style={{
          borderColor: percent > 0 ? '#CCFF00' : '#FF823C',
          borderRadius: 2,
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 5,
          paddingRight: 5,
          height: '100%',
          marginLeft: 10,
        }}>
        <Text
          style={{
            color: percent > 0 ? '#CCFF00' : '#FF823C',
            fontSize: 11,
            fontFamily: 'CascadiaMonoPL-SemiBold',
          }}>
          {percent > 0 ? '+' : null}
          {percent}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    minWidth: 80,
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 15,
  },
});
