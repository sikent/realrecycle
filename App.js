import React, { Component } from 'react';
import {
  StyleSheet,
  Text, 
  View,
  Dimensions
} from 'react-native';
import Login from './Components/Login';
import Camera from './Components/Camera.js'
import Octagon from './Components/Buttons/Octagon'
import Swiper from 'react-native-swiper';
import {Container, Content} from 'native-base';

const {height, width} = Dimensions.get("window")

export default class App extends Component {
  render() {
    return (
      <View style={{width: "100%", height: "100%", backgroundColor: "#ccc"}}>
        <Swiper loop={false} showsPagination={false} index={1} containerStyle={{width: width, height: height}}>
          <View style={[styles.cool, styles.view]}><Login/></View>
          <View style={styles.cool}><Camera/></View>
          <View style={styles.cool}><Text>Results</Text></View>
        </Swiper>
      </View>
    );
  }

 
}

const styles = StyleSheet.create({
  cool: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width
  },
  view: {
    width: "100%"
  }
});

