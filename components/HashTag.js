import {View, Text} from 'react-native';

export default function HashTag({tag}) {
  return (
    <Text
      style={{
        fontFamily: 'Inter-Regular',
        fontSize: 13,
        color: '#64615C',
        marginRight: 10,
      }}>
      #{tag}
    </Text>
  );
}
