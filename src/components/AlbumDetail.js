import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// make a component
const AlbumDetail = props => (
  <Card>
    <CardSection>
      <Text>{props.album.title}</Text>
    </CardSection>
  </Card>
  );


export default AlbumDetail;
