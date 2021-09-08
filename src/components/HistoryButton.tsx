import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
}

const HistoryButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Icon name="chatbox" size={21} color={'#ecf0f1'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 58,
    width: 85,
    borderRadius: 8,
    alignItems: 'center',
    borderBottomWidth: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#95a5a6',
    borderBottomColor: '#7f8c8d',
  },
  text: {
    fontSize: 18,
    color: '#ecf0f1',
    paddingHorizontal: 12,
  },
});

export default HistoryButton;
