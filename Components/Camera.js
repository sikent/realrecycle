import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button, Dimensions} from 'react-native';
import {Camera, Permissions} from 'expo';
import {Ionicon} from 'expo'
import {Container} from 'native-base'
 
export default class CameraComponent extends Component {
  state={
      hasCameraPermission: null, // checks for permission
      type: Camera.Constants.Type.back, // Back is used 

  }
    async componentWillMount(){ // Permission Component
    const {status} = await Permissions.askAsync(Permissions.CAMERA); //
    this.setState({hasCameraPermission: status === 'granted'}) // if the user allows the caemra state is changed

    }

capture = () =>{
   alert("Captured");
}

  render() {
    const {hasCameraPermission} = this.state
    if(hasCameraPermission === null){
        return <View/>
    }
    else if(hasCameraPermission === false){
        return <Text>No Access to Camera</Text>
    }
    else{
        return(
        <View style={styles.container}>
            <Camera type={this.state.type} style={styles.container} />
            <Button onPress={this.capture} title="Capture"></Button>
        </View>
        )
    }

  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"

    }
})
