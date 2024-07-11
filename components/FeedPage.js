import {StyleSheet, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import Ticker from './Ticker';
import HashTag from './HashTag';
import Icon from 'react-native-vector-icons/Feather';

function FeedPage() {
  return (
    <View style={style.container}>
      <View style={style.imgSec}>
        <Image
          source={require('../assets/TestImage/TeslaImage.jpeg')}
          style={{
            width: '86%',
            height: 182,
            resizeMode: 'cover',
            borderRadius: 13,
          }}
        />
      </View>
      <View style={style.titleSec}>
        <View style={{width: '100%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontFamily: 'Lastik',
            }}>
            Tesla Stock takes a Dive for the Worst!
          </Text>
        </View>
      </View>
      <View style={style.tickerSec}>
        <Ticker name={'TSLA'} percent={-1.2} />
        <Ticker name={'RIVN'} percent={0.12} />
      </View>
      <View style={style.hashSec}>
        <HashTag tag={'Trending'} />
        <HashTag tag={'Auto'} />
        <HashTag tag={'Tesla'} />
      </View>
      <View style={style.articleSec}>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontSize: 12,
            color: '#F1EFE7',
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam libero
          justo laoreet sit amet cursus sit amet. Sit amet venenatis urna cursus
          eget. Pulvinar pellentesque habitant morbi tristique. Fringilla
          phasellus faucibus scelerisque eleifend donec pretium vulputate.{'\n'}
          {'\n'}
          Morbi enim nunc faucibus a pellentesque. Varius sit amet mattis
          vulputate enim nulla aliquet porttitor lacus.{'\n'}
          {'\n'}Tristique senectus et netus et malesuada. Blandit aliquam etiam
          erat velit scelerisque in. Elit duis tristique sollicitudin nibh sit.
          Urna nec tincidunt praesent semper feugiat nibh sed. Ullamcorper
          dignissim cras tincidunt lobortis feugiat vivamus at augue eget.{'\n'}
          {'\n'}Sed augue lacus viverra vitae congue eu consequat ac felis.
          Venenatis tellus in metus vulputate eu scelerisque.
        </Text>
      </View>
      <View style={style.nextSec}>
        <Text
          style={{
            color: '#F1EFE7',
            fontFamily: 'Inter-Medium',
            fontSize: 13,
          }}>
          Next Article
        </Text>
        <Icon name={'chevrons-down'} color="#F1EFE7" size={15} />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  imgSec: {
    flex: 0,
    width: '100%',
    // height: '35%',
    height: 182,
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSec: {
    flex: 0,
    width: '86%',
    // height: 80,
    // maxHeight: 80,
    // backgroundColor: 'green',
    // paddingLeft: '10%',
  },
  tickerSec: {
    flex: 0,
    flexDirection: 'row',
    width: '86%',
    height: 20,
    // backgroundColor: 'black',
  },
  hashSec: {
    flex: 0,
    width: '86%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'orange',
  },
  articleSec: {
    flex: 0,
    width: '86%',
    // height: 10,
    // backgroundColor: 'black',
  },
  nextSec: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FeedPage;
