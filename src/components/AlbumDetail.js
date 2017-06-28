import React from 'react';
import { Text, View } from 'react-native';
import StyledCard from './Card';

// make a component
const AlbumDetail = props => (
  <View>
    <Text>{props.album.title}</Text>
  </View>
  );


export default AlbumDetail;
