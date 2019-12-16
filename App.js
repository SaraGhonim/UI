/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,TextInput,
  StatusBar,TouchableOpacity,Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SwipeUpDown from'react-native-swipe-up-down';
import SwipeablePanel from "rn-swipeable-panel";

import CreateAcc from'./components/createAcc';
import SignIn from'./components/signIn';
import Terms from'./components/terms';

import BasicInfo from'./components/basicInfo';
import PhoneNumber from'./components/phoneNumber';
import Welcome from './components/wlcome';
import Verification from './components/verifyCode';
import i1 from './assets/i1.png';

import Home from'./screens/home.js';
import AppContainer from './navigation';
class App extends  Component{

  render() {
    return (
      <View style = {{flex:1}}>
       <AppContainer/>    
       
       {/*<Drawer/>*/}   
        </View>

          
    )
  }



}


export default App;
