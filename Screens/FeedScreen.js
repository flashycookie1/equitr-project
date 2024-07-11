import {StyleSheet, View, Text} from 'react-native';
import FeedPage from '@/components/FeedPage';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <FeedPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17150E',
  },
});
