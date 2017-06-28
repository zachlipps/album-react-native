import React from 'react';
import { View } from 'react-native';

// make a component
const Card = () => (
  <View style={styles.cardStyles} />
);


const styles = {
  cardStyles: {
    borderWidth: '1px',
    borderRadius: '2px',
    borderColor: '#ddd',
    borderBottomWidth: '0',
    shadowColor: '#000',
    shadowOffset: '{ width: 0, height: 2 }',
    shadowOpacity: '.1',
    shadowRadius: '2px',
    elevation: '1px',
    marginLeft: '5px',
    marginRight: '5px',
    marginTop: '10px',
  },
};


export default Card;
