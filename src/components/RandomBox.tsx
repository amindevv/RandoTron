import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions} from 'react-native';

interface Props {
  randomValue: number;
}
const RandomBox = ({randomValue}: Props) => {
  const {width} = useWindowDimensions();
  const measure = width / 3;
  return (
    <View
      style={StyleSheet.flatten([
        {
          width: measure,
          height: measure,
        },
        styles.box,
      ])}>
      <Text style={styles.text}>{randomValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#ecf0f1',
    marginTop: 16,
    borderRadius: 8,
    borderBottomWidth: 8,
    borderBottomColor: '#bdc3c7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default RandomBox;
