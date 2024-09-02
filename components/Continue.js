import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default function Continue({withWhat, logo, color='white', size='30'}) {
    return (
        <Pressable style={styles.container}>
            <Icon name={logo} color={color} size={size} style={{paddingLeft: 15}}/>
            <Text style={{
                color: '#F1EFE7',
                fontFamily: 'Inter-Medium',
                fontSize: 13,
                textAlign: 'center',
            }}>Continue {withWhat}</Text>
            <View width='8%'/>
            </Pressable>
    )
}
export function ContinueAlt({withWhat=null, active}){
  const onContinue = () => {
    active ? console.log('Button pressed!'): console.log('Code has not been entered!');
  }
  
  const containerStyle = (active) ? [
      styles.containerAlt
    ]
    : styles.containerAltInactive;

    const continueStyle = (active) ? [
      styles.continue
    ]
    :styles.continueInactive;
  return (
        <Pressable style={containerStyle}  onPress={onContinue}>
            <Text style={continueStyle}>Continue {withWhat}</Text>
            </Pressable>
    );    
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      height: 58,
      backgroundColor: '#201E19',
      borderRadius: 100,
      marginBottom: 18,
    },

    containerAlt: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: 58,
      backgroundColor: '#F1EFE7',
      borderRadius: 100,
    },
    containerAltInactive: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: 58,
      backgroundColor: '#201E19',
      borderRadius: 100,
    },
    continue: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      textAlign: 'center',
      color: '#17150E',
    },
    continueInactive: {
      fontFamily: 'Inter-Medium',
      fontSize: 14,
      textAlign: 'center',
      color: '#504E49',
    },
  });
  