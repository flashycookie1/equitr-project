import {StyleSheet, View, Text} from 'react-native';
import FeedPage from '@/components/FeedPage';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FeedPage />
    </SafeAreaView>
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
