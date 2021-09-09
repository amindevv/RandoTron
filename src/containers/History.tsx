import React from 'react';
import {StyleSheet, Modal, FlatList, TouchableOpacity} from 'react-native';
import HistoryRow from '../components/HistoryRow';

interface Props {
  randoms: Number[][];
  modalVisible: boolean;
  onModalClose: () => void;
}
const History = ({randoms, modalVisible, onModalClose}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onModalClose}>
      <TouchableOpacity
        style={styles.dismiss}
        activeOpacity={0.9}
        onPress={onModalClose}>
        <TouchableOpacity activeOpacity={1} style={styles.container}>
          <FlatList
            data={randoms}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <HistoryRow randoms={item} />}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    height: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 8,
    margin: 24,
    paddingVertical: 12,
  },
  dismiss: {
    flex: 1,
  },
});

export default History;
