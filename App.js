import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import images from './images/';

export default class App extends Component {
  state = {
    index: 0,
  }

  render() {
    const image = images[this.state.index];

    return (
      <View style={styles.container}>
        <View style={styles.empty} />
        <Image
          source={{uri: image.uri}}
          style={styles.image}
        >
          <Text style={styles.imageLabel}>{image.label}</Text>
        </Image>
        <View style={styles.empty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcdef',
  },
  image: {
    flex: 2,
    width: 320,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageLabel: {
    textAlign: 'center',
    backgroundColor: 'rgba(100, 100, 100, 0.5)',
    color: 'white',
    width: 320
  },
  empty: {
    flex: 1
  }
});
