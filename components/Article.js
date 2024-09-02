import {Text, View, Image, StyleSheet} from 'react-native';
import HashTag from './HashTag';
import Ticker from './Ticker';

export default function Article({title}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imgSec}
        source={require('@/assets/TestImage/TeslaImage.jpeg')}
      />
      <View style={styles.titleSec}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontFamily: 'Lastik-Regular',
          }}>
          Tesla Stock takes a Dive for the Worst!
        </Text>
      </View>
      <View style={styles.hashSec}>
        <HashTag tag={'Trending'} />
        <HashTag tag={'Auto'} />
        <HashTag tag={'Tesla'} />
      </View>
      <View style={styles.sumSec}>
        <Text
          style={{
            fontFamily: 'Lastik-Regular.otf',
            fontSize: 12,
            color: '#64615C',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat
          lectus at erat lobortis, vel placerat lorem rutrum. Suspendisse mattis
        </Text>
      </View>
      <View style={styles.tickerSec}>
        <Ticker name={'TSLA'} percent={-1.2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 30,
    // backgroundColor: 'red',
  },
  imgSec: {
    flex: 0,
    width: '100%',
    height: 113,
    resizeMode: 'cover',
    borderRadius: 13,
    marginBottom: 8,
  },
  titleSec: {
    flex: 0,
    width: '100%',
    marginBottom: 8,
  },
  hashSec: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sumSec: {
    flex: 0,
    width: '100%',
    // backgroundColor: 'blue',
    marginBottom: 8,
  },
  tickerSec: {
    flex: 0,
    flexDirection: 'row',
    width: '100%',
    height: 20,
    // backgroundColor: 'orange',
  },
});
