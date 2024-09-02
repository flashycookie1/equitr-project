import {View,StyleSheet, Text, Image} from 'react-native';
import Icon from "react-native-vector-icons/Feather";

export default function StockNameUp({stockName, stockPrice}) {
    return (
        <View style={styles.stockNameContainer}>
          <Text style={styles.stockNameText}>{stockName}
            <Text style={{color: '#CCFF00'}}> {stockPrice}</Text>
            </Text>
            <View style={styles.iconBorder}>
                <Icon name='arrow-up-right' color='#CCFF00' size='18'></Icon>
            </View>
          </View>
    )
}

export function StockNameDown({stockName, stockPrice}) {
    return (
        <View style={styles.stockNameContainer2}>
          <Text style={styles.stockNameText}>{stockName}
            <Text style={{color: '#FF823C'}}> {stockPrice}</Text>
            </Text>
            <View style={styles.iconBorder2}>
                <Icon name='arrow-down-right' color='#FF823C' size='18'></Icon>
            </View>
          </View>
    )
}

const styles = StyleSheet.create({
    stockNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#20210D',
        padding: 20,
        borderRadius: 25,
        margin: 15,
      },
      stockNameContainer2: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#231A10',
        padding: 20,
        borderRadius: 25,
        margin: 15,
      },
      stockNameText: {
        color: '#F1EFE7',
        fontFamily: 'Lastik-Regular',
        fontSize: 22
      },
      iconBorder: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 5,
        height: 'auto',
        borderRadius: 100,
        borderColor: '#CCFF00',
        borderWidth: 2,
        marginLeft: 6,
      },
      iconBorder2: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 5,
        height: 'auto',
        borderRadius: 100,
        borderColor: '#FF823C',
        borderWidth: 2,
        marginLeft: 6,
      }
  });
  