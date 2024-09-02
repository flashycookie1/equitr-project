import {View,StyleSheet, Text, Image, TextInput, inputBar} from 'react-native';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Continue, { ContinueAlt } from '@/components/Continue.js'
import HorizontalLine from '@/components/HorizontalLine.js'

export default function LoginScreen() {
  
  const [email, setEmail] = useState('');

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let showValidEmail = false;
  const validateEmail = (email) => {
    if(email.match(isValidEmail)){
      showValidEmail = true;
    }else{
      showValidEmail = false;
    }};

  return (
    <View style={styles.container}>
        <Image source={require('@/assets/logo.png')} marginTop={'140'}
        style={{
            width: '15%',
            height: 63,
            resizeMode: 'cover',
            marginBottom: 10,
          }}/>
        <Text style={styles.welcome}>Welcome to Equitr.</Text>
            <Continue withWhat={'with Apple'} logo={'logo-apple'} size='30'></Continue>
            <Continue withWhat={'with Google'} logo={'logo-google'} size='28'></Continue>
            <Continue withWhat={'with Facebook'} logo={'logo-facebook'} size='32'></Continue>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{height: 1.5, backgroundColor: '#63615C', width: '25%'}} />
        <View><Text style={{width: 45, textAlign: 'center', color: '#63615C'}}>OR</Text></View>
        <View style={{height: 1.5, backgroundColor: '#63615C', width: '25%'}} /></View>
            <View style={styles.emailcontainer}>
      <Icon name={'mail'} size={18} color={'white'} />
      <TextInput
        style={styles.inputSec}
        value={email}
        onChange={setEmail}
        placeholder="Enter your email address"
        placeholderTextColor={'white'}
        textAlign="left"
        multiline={false}
        numberOfLines={1}
        autoComplete='email'
        inputMode="email"
      required/>
    </View>
            <ContinueAlt withWhat={'with Email'} active={showValidEmail}></ContinueAlt>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#17150E',
    width: '100%',
  },
  welcome: {
    fontFamily: 'Lastik',
    fontSize: 35,
    color: '#F1EFE7',
    paddingBottom: 35,
  },
  emailcontainer: {
    width: '80%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#F1EFE7',
    paddingLeft: 20,
    marginTop: 30,
    marginBottom: 30,
  },
  inputSec: {
    flex: 1,
    color: 'white',
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    marginLeft: 12,
  },
});