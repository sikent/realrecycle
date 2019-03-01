import React, { Component } from 'react';
import {  Button,View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default class Octagon extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <View style={style.central}>
        <Button title="Capture"></Button>
    </View>
    );
  }
}

const style = StyleSheet.create({
    central: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    },
})
