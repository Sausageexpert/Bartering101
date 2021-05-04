
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import db from './config';

export default class Authentication extends React.Component{
    constructor(){
        super();

        this.state = {
          email: '',
          password: ''
        }
    }

    login = async(email, password) => {
        
           firebase.auth().signInWithEmailAndPassword(email, password)

        .then(() => {
              return alert("Welcome to our super-secret cult... Oh, I mean, completely legitimate app!");
            })
    

        .catch((error) => {
        
            var errorCode = error.code;
            var errorMessage = error.message;

            return alert(errorMessage);
        })
    }

    signup = async(email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((response) => {
            return alert("Welcome to our super secret cult... Oh, I mean, completely legitimate app!")
        })
 
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
 
            return alert(errorMessage);
        })
     }

    render(){
        return(
            <View style = {styles.container}>

                <Text style = {styles.header}>Bartering 101 - Authentication Screen</Text>
              
              <View>
              <TextInput style = {styles.input}
                  placeholder = "Enter Email ID Here!"
                  keyboardType = 'email-address'
                  placeholderTextColor = 'green'
                  onChangeText = {text => {
                     email: text
                  }}/>

                 <TextInput style = {styles.input}
                  placeholder = "Enter Password Here!"
                  placeholderTextColor = 'green'
                  onChangeText = {text => {
                    password: text
                  }}/>

                  <TouchableOpacity style = {styles.button}
                  onPress = {() => {
                      this.login(this.state.email, this.state.password);
                  }}>
                      <Text style = {styles.buttonText}>Login</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style = {styles.button}
                  onPress = {() => {
                      this.signup(this.state.email, this.state.password);
                  }}>
                      <Text style = {styles.buttonText}>Sign Up</Text>
                  </TouchableOpacity>

                  <Text style = {{marginTop: 50}}>
                      "Here at Bartering 101, your bartering is our priority."
                      -Soham Raychaudhuri, Restaurateur, Priest and Television Host 
                  </Text>

                  <Text style = {styles.quoteText}>
                  Here at Bartering 101, we are dedicated to serving our customers in the
                  best way possible. We have a dedicated team of well
                      trained lynxes who expertly analyze your sensitive information by matching dots on a screen.
                      What's more, we also provide amazing new features, like the Snapdragon-Qualcomm-radio-detector-
                      infrared-sightseeing-radar-developer, which are the latest in random name generator technology.
                      Also, all your sensitive information is end-to-end encrypted, and is protected from data invaders
                      by the latest technology, comprising of one lynx, armed to the teeth (yeah, that was a bad pun). Sign
                      up today to avail exclusive premium barterer benefits!
                  </Text>
              </View>
                  
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },

    input: {
      border: 4,
      textAlign: 'center',
      fontFamily: 'Edwardian Script ITC',
      fontSize: 30,
      width: 500,
      height: 50,
      alignSelf: 'center',
      marginTop: 50,
      borderColor: 'black'
    },

    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        backgroundColor: 'lightgreen'
    },
    
    button: {
       width: 200,
       height: 40,
       borderRadius: 40,
       alignSelf: 'center',
       backgroundColor: 'pink',
       marginTop: 50
    },

    quoteText: {
        textAlign: 'left',
        fontSize: 20,
        fontColor: 'black',
        marginTop: 50,
        backgroundColor: 'orange'
    },

    buttonText: {
        marginTop: 10,
        textAlign: 'center'
    }
})