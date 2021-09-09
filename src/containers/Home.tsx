import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HistoryButton from '../components/HistoryButton';
import RandomBoxContainer from '../components/RandomBoxContainers';
import RandomButton from '../components/RandomButton';
import {generateRandom} from '../redux/actionCreators/MainActionCreator';
import {RootState} from '../types/MainState';
import History from './History';

const Home = () => {
  const dispatch = useDispatch();
  const currentRandoms = useSelector((root: RootState) => root.main.randoms);
  const [showHistory, setShowHistory] = useState(false);
  const [randoms, setRandoms] = useState<number[][]>([]);

  useEffect(() => {
    setRandoms(randoms => {
      return [...randoms, currentRandoms];
    });
  }, [currentRandoms]);

  const requestRandoms = () => {
    dispatch(generateRandom());
  };

  return (
    <View style={styles.home}>
      <History
        modalVisible={showHistory}
        onModalClose={() => setShowHistory(false)}
        randoms={randoms}
      />

      <View style={styles.content}>
        <RandomBoxContainer randoms={currentRandoms} />
      </View>

      <View style={styles.actions}>
        <RandomButton onPress={requestRandoms} />
        <HistoryButton onPress={() => setShowHistory(true)} />
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
