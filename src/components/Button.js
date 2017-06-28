import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>Click me!</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginRight: 5,
    marginLeft: 5,
  },
};

export default Button;
