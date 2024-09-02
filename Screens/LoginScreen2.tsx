import {
  View,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
  InteractionManager,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';

import Continue, { ContinueAlt } from '@/components/Continue.js';

export default function LoginScreen2() {
  const email = '{EMAIL@EMAIL.COM}';
  const cellCount = 4;
  
  //Verification Boxes
  const [code, setCode] = useState('');
  const [containerIsFocused, setContainerIsFocused] = useState(false);

  const codeDigitsArray = new Array(cellCount).fill(0);
  const ref = useRef(null);
  const isCodeFull = code?.length === cellCount;

  const toDigitInput = (_value: number, idx:number) => {
    const emptyInputChar = ' ';
    const digit = code?.[idx] || emptyInputChar;

    const isCurrentDigit = idx === code?.length;
    const isLastDigit = idx === cellCount - 1;
  

    const isFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const containerStyle =
    (digit != emptyInputChar) ? [
      styles.codeInputCellContainer,
      styles.inputContCircle,
      ]
      : containerIsFocused && isFocused
        ? [
            styles.codeInputCellContainer,
            styles.inputContFocus,
        ]
        : styles.codeInputCellContainer;

    return (
      <View key={idx} style={containerStyle}>
        <Text style={{color: 'white', fontSize: 30}}>{digit}</Text>
      </View>
    );
  };

  const handleOnPress = () => {
    setContainerIsFocused(true);
    ref?.current?.focus();
  };

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setContainerIsFocused(true);
      ref?.current?.focus();
    });
  }, []);

  return (
      <View style={{backgroundColor: '#17150E', flex: 1}}>
      <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.bottomContainer}>
      <Text style={styles.welcome}>Check your email.</Text>
      <Text style={styles.textDef}>We sent a code to {email}. Enter the code below to log in.</Text>
      <View>
      <Pressable
      style={styles.inputsCont}
      onPress={handleOnPress}
      >
      {codeDigitsArray.map(toDigitInput)}
      </Pressable>
      <TextInput
      ref = {ref}
      value ={code}
      onChangeText = {setCode}
      keyboardType='number-pad'
      textContentType='oneTimeCode'
      maxLength={cellCount}
      style={styles.hide}
      keyboardAppearance='dark'
      returnKeyType='done'
      />
      </View>
      <Text style={{
        fontFamily: 'Inter-Medium',
        textDecorationLine: 'underline',
        color: '#FF823C',
        marginTop: 20,
        marginBottom: 20
        }}>Resend in 5s</Text>
        <ContinueAlt active={isCodeFull}></ContinueAlt>
      </View>
    </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#080705',
    width: '100%',
  },
  bottomContainer:{
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 400,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#17150E',
  },
  welcome: {
    fontFamily: 'Lastik',
    fontSize: 35,
    color: '#F1EFE7',
    paddingBottom: 10,
  },
  textDef: {
    fontFamily: 'Inter-Medium',
    color: '#63615C',
    fontSize: 13,
    textAlign: 'center',
    width: '75%',
  },
  inputsCont: {
    width: '84%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    },
  inputContFocus: {
    borderColor: '#26231D',
    borderWidth: 2,
    borderRadius: 20,
    bottom: 12,
  },
  inputContCircle: {
    borderRadius: 50,
  },
  hide: {
    position: 'absolute',
    height: 0,
    width: 0,
    opacity: 0,
  },
  codeInputCellContainer: {
    backgroundColor: '#201E19',
    borderRadius: 20,
    fontFamily: 'Inter-Medium',
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
