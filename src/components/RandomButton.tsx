import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  onPress: () => void;
}

const RandoButton = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.8}
      onPress={onPress}>
      <Icon name="color-wand-outline" size={21} color={'#ecf0f1'} />
      <Text style={styles.text}>Randomize!</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginRight: 8,
    height: 58,
    borderRadius: 8,
    alignItems: 'center',
    borderBottomWidth: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#1abc9c',
    borderBottomColor: '#16a085',
  },
  grey: {
    backgroundColor: '#95a5a6',
    borderBottomColor: '#7f8c8d',
  },
  text: {
    fontSize: 18,
    color: '#ecf0f1',
    paddingHorizontal: 12,
  },
});

export default RandoButton;
