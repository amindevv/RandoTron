import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface Props {
  randoms: Number[];
}
const HistoryRow = ({randoms}: Props) => {
  const RandomTexts = () => (
    <>
      {randoms.map(random => (
        <Text style={styles.text}>{random}</Text>
      ))}
    </>
  );

  return (
    <View style={styles.row}>
      <RandomTexts />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    width: 42,
    margin: 12,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HistoryRow;
