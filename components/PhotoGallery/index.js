import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

import images from '../../data/images';

export default class PhotoGallery extends Component {
  state = {
    index: 0,
    imageWidth: null,
  };

  nextImage = (event) => {
    const { index, imageWidth } = this.state;

    const x = event.nativeEvent.locationX;
    const delta = (x < imageWidth/2) ? -1 : +1;

    let newIndex = (index + delta) % images.length;

    if (newIndex < 0) {
      newIndex = images.length - Math.abs(newIndex);
    }

    this.setState({ index: newIndex });
  }

  onImageLayout = (evt) => {
    this.setState({ imageWidth: evt.nativeEvent.layout.width });
  }

  render() {
    const image = images[this.state.index];

    return (
      <View style={styles.container}>
        <View style={styles.empty} />
        <TouchableHighlight onPress={this.nextImage} style={styles.image}>
          <Image
            source={{uri: image.uri}}
            style={styles.image}
            onLayout={this.onImageLayout}
          >
            <Text style={styles.imageLabel}>{image.label}</Text>
          </Image>
        </TouchableHighlight>
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
