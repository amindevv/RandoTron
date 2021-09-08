import React from 'react';
import {View, StyleSheet} from 'react-native';
import RandomBox from './RandomBox';

interface Props {
  randoms: Array<number>;
}
const RandomBoxContainer = ({randoms}: Props) => {
  return (
    <View style={styles.box}>
      <RandomBox randomValue={randoms[0]} />
      <RandomBox randomValue={randoms[1]} />
      <RandomBox randomValue={randoms[2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RandomBoxContainer;
