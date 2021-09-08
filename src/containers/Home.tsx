import React from 'react';
import {StyleSheet, View} from 'react-native';
import HistoryButton from '../components/HistoryButton';
import RandomButton from '../components/RandomButton';

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.content} />

      <View style={styles.actions}>
        <RandomButton onPress={() => {}} />

        <HistoryButton onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  content: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    padding: 8,
  },
});

export default Home;
