import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const AnimalList = () => (
  <View style={styles.container}>
    <Text>
      AnimalList
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
});

export default AnimalList;
