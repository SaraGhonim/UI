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
import CreateAcc from'../components/createAcc';
import SignIn from'../components/signIn';
import Terms from'../components/terms';
import SwipeablePanel from "rn-swipeable-panel";

import BasicInfo from'../components/basicInfo';
import PhoneNumber from'../components/phoneNumber';
import Welcome from '../components/wlcome';
import Verification from '../components/verifyCode';
import i1 from '../assets/i1.png';


class Logging extends  Component{
    constructor(props) {
      super(props);
      this.changeState=this.changeState.bind(this);
  
      this.state = {
        // animation: 'easeInEaseOut',
        clicked: 2,
        X:130,
        icon1:i1,
        // swipeablePanelActive: false
  
      }
  
    };
  
    changeState= (clicked , X) =>{
      this.setState({clicked:clicked,X:X},()=>{this.swipeUpDownRef.showFull(X);
      
      });
     
   }
   openPanel = () => {
    this.setState({ swipeablePanelActive: true });
  };
    
  closePanel = () => {
    this.setState({ swipeablePanelActive: false });
  };
  
  render()
      {const {clicked,icon1}=this.state;
   
        
        return (
      <>
        <View style={{flex:1,backgroundColor: "#ffd420"}}>
         <View style={{ alignItems: 'center',justifyContent: 'center', height: 500, marginBottom: 0,width:360}}>
         <Image source={icon1}
            style={{ width: 210,
              height: 350,
              resizeMode: 'contain'}} /> 
              </View>
       <SwipeUpDown style={{backgroundColor:'#ffffff'}}
        hasRef={ref => (this.swipeUpDownRef = ref)}
        swipeHeight={170}
        itemMini={
          
          <Welcome   changeState={this.changeState} />
       
        }
        
        itemFull={
        <View>
         { (clicked===1)?
        (
           <CreateAcc  changeState={this.changeState} />
      ):(  
        (clicked===2)?
  
         (<SignIn navigation={this.props.navigation}/>   )
         :(
          (clicked===3)?
         (<Terms changeState={this.changeState}/>)
         : (
           (clicked===4)?
         (<BasicInfo  changeState={this.changeState} />)
         :
         (
           (clicked===5)?
           (<PhoneNumber  changeState={this.changeState} />)
          :
          (
            (clicked===6)?
            
          (<Verification  changeState={this.changeState} navigation={this.props.navigation} />)
          :
  
          (
          <SwipeablePanel
            fullWidth
            isActive={this.state.swipeablePanelActive}
            onClose={this.closePanel}
            onPressCloseButton={this.closePanel}
          >
             <View style={{marginBottom:20}}>
  
           <TextInput
           keyboardType="email-address"
          autoCorrect={false} multiline={false}
          placeholder="Terms"
         underlineColorAndroid = "#ffd420">
         </TextInput>
             </View>   
          </SwipeablePanel>
          )
  
          )
         )
  
         )
  
         )
        
         )
        
        }
      
      </View>
      }
  
        />  
        

        </View>
  
      </>
    );
  
    }
  };
  
  const styles = StyleSheet.create({
    input2:{ height: 40,
      borderColor: '#7a42f4',
      textAlign: 'center',
      color: 'white',
      paddingTop:5},
      button:{
        backgroundColor:'#ff8900',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        height: 35,
      width:250,marginBottom:20},  
  
      button2:
      {
       backgroundColor:'#f1f2f6',
        borderTopLeftRadius: 10, borderTopRightRadius: 10,
        borderBottomLeftRadius:10,borderBottomRightRadius:10,
        height: 35,
      width:250,
    marginBottom:20},
      input: {
        height: 40,
        width:260,
        borderColor: '#ffffff',
        textAlign: 'center',
        color:'black',
        paddingTop:5
  },        
    
  });
  
  

export default Logging;
