import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, ScrollView, StatusBar, Dimensions, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button, TextInput } from 'react-native';
import LoginView from './LoginView';
const {width, height} = Dimensions.get('window');

export default class LoginVC extends React.Component {

render(){
    return (
        <>
        <StatusBar barStyle="light-content" />
        <View style={styles.parentView}>
        <SafeAreaView></SafeAreaView>
        <LoginView></LoginView>
        </View>
        </>
      );
}

};

const styles = StyleSheet.create({
   parentView: {
    width: width,
    height: height, 
    backgroundColor: "#f00",
   }, 
});
