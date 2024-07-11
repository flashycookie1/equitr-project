import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          width: 50,
          height: 50,
          position: 'relative',
          zIndex: 999,
          top: -20,
          overflow: 'visible',
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#17150E',
    zIndex: 500,
  },
});
