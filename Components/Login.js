
import React, { Component } from 'react';
import {  View, Text, StyleSheet, ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyA2GnfN8GgWdICirE1zBbHU62FnEutB_x8", //Firebase config for connection
    authDomain: "recycle-14cfe.firebaseapp.com",
    databaseURL: "https://recycle-14cfe.firebaseio.com",
    projectId: "recycle-14cfe",
    storageBucket: "recycle-14cfe.appspot.com",
}
firebase.initializeApp(firebaseConfig); // init the connection 

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: "", // To get the users email 
        password: "", // To get the users password

    };
  }

  _login = (email, password) =>{
     
    alert("clicked");


        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){ // Sign in the user to account            console.log(user);
            console.log(user);
        }).catch(function(error){
            alert(error);

        })
    
    
  }
_signup = (email, password) =>{
    try {
       if(this.state.password.length <= 6){ // checks to make the user has entered 6 charcters 
        alert("Password must contain more than 6 charcters") // Alert is thrown 
        return;
       }
  
       firebase.auth().createUserWithEmailAndPassword(email, password); // Create new user with given given info

    } catch (error) {
        console.log(error); // Log if creating the user errors
 
    }

}
  render() {
      
    return (
        
    <Container style={style.central}>
        <Form>
           
            <Item floatingLabel> 
                <Label>Email</Label>
                <Input
                autoCorrect={true}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
                >
                </Input>
            </Item>

            <Item floatingLabel> 
                <Label>Password</Label>
                <Input
                secureTextEntry={true}
                autoCorrect={true}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({password})}
                >
                </Input>
            </Item>

        <Button full rounded success style={{marginTop: 10}}
        onPress={() =>this._login(this.state.email, this.state.password)}><Text style={{color: "white"}}>ogin</Text>
        </Button>


        <Button full rounded  style={{marginTop: 10}} onPress={() =>this._signup(this.state.email, this.state.password)}>
        <Text style={{color: "white"}}>Sign Up</Text></Button>
        </Form>
     
    </Container>
    );
  }
}
const style = StyleSheet.create({

    central: {
        justifyContent: 'center',
        flex: 1,
      padding: 10,
      width: "100%"
       
       

    }
})
