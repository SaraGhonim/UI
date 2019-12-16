import React, { Component } from "react";
import {StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import {Icon} from 'native-base';

import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {createDrawerNavigator} from 'react-navigation-drawer';
import { DrawerActions } from 'react-navigation-drawer';
import i10 from '../assets/i10.png'
import i11 from '../assets/i11.png'
import i12 from '../assets/i12.png'
import i13 from '../assets/i13.png'
import i14 from '../assets/i14.png'
import i15 from '../assets/i15.png'

import i16 from '../assets/i16.png'
import i17 from '../assets/i17.png'
import i19 from '../assets/i19.png'
import i20 from '../assets/i20.png'
import i21 from '../assets/i21.png'


import Icon1 from 'react-native-ionicons'


import WhereToGo from "../screens/whereToGo";
import Logging from "../screens/logging";
import Home from '../screens/home';
import SignIn from "../components/signIn";

import i2 from '../assets/i2.jpg'
import { isRequired } from "react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType";


class NavigationDrawerStructure extends Component {
  constructor(props) {
    super(props);
    //this.toggleDrawer=this.toggleDrawer.bind(this);


    this.state = {
      icon2:i2,
    }
  }
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={()=>{this.props.navigation.toggleDrawer();console.log('1111111')}}>
        <Image source={this.state.icon2}
          style={{ width: 45,
          height: 45,
          resizeMode: 'contain'}}
           />
        </TouchableOpacity>
      </View>
    );
  }
}


const FirstStack = createStackNavigator(
{
Logging,

},
{ headerMode: 'none'}

);
const HomeStack = createStackNavigator(

  {
    Home:{screen:Home,navigationOptions: ({ navigation }) => ({
      title: '',
      headerLeft: <NavigationDrawerStructure navigation={navigation} />,
       headerStyle: {
           backgroundColor: 'rgba(90, 0, 52, 0.1)',
       },
       headerTintColor: '#000000',
    }),
  },
  },
  // {
  //   headerMode:'none'
  // }
)
const CustomDrawer = props => {
  
  return (
    <View style={{flex: 1}}>
       <View style={{backgroundColor:'#ff8900',height:180,marginBottom:20, 
  borderBottomColor: 'orange',  borderBottomWidth: 6,

}}>
        <View style={{top:50,paddingLeft:30,borderTopLeftRedius:20,borderTopRightRedius:20}}>
        <Image source={i20}
        style ={{width: 40,
          height: 40,}}/>
          </View>
          <Text style={{fontSize: 25,color:'white',top:51,paddingLeft:19}}> Mahmoud Samy</Text>
          <Text style={{fontSize: 15,color:'white',top:55,paddingLeft:19}}> @ibn Samy</Text>
      
      
        </View>
 
        
        <View style={{marginBottom:4,flexDirection: "row",paddingLeft:12 ,padding:5}}>
        <Image source={i10}
        style ={{width: 20,
          height: 20,}}/>
      <Text style={{fontSize: 18,color:'gray'}}>  Notifications</Text>
      </View>

      <View style={{marginBottom:4,flexDirection: "row",paddingLeft:12,padding:5 }}>
        <Image source={i14}
        style ={{width: 20,
          height: 20,}}/>
      <Text  style={{fontSize: 18,color:'gray'}}>  Your Rides      </Text>
      </View>

      
       <View style={{marginBottom:4,flexDirection: "row",padding:5 ,paddingLeft:12}}>
        <Image source={i12}
        style ={{width: 20,
          height: 20,}}/>
      <Text  style={{fontSize: 18,color:'gray'}}>  Packages and Offers</Text>
      </View>

      <View style={{marginBottom:4,flexDirection: "row",padding:5,paddingLeft:12 }}>
        <Image source={i13}
        style ={{width: 20,
          height: 20,}}/>
      <Text  style={{fontSize: 18,color:'gray'}}>  Your Wallet      </Text>
      </View>

      <View style={{marginBottom:4,flexDirection: "row",padding:5,paddingLeft:12 }}>
        <Image source={i17}
        style ={{width: 20,
          height: 20,}}/>
      

      <Text  style={{fontSize: 18,color:'gray'}}>  Free Rides   </Text>
      </View>

      <View style={{marginBottom:4,flexDirection: "row",padding:5,paddingLeft:12,marginBottom:50 }}>
        <Image source={i11}
        style ={{width: 20,
          height: 20,}}/>
      
      <Text  style={{fontSize: 18 ,color:'gray'}}>  Help </Text>
      </View>

    <View style={{  borderBottomColor: 'gray',  borderBottomWidth: 1,marginBottom:0}}>

      </View>


      <View style={{marginBottom:4,flexDirection: "row",padding:0,paddingLeft:20,top:18 ,alignItems:'center',marginBottom:5}}>

      <View style={{marginBottom:4,flexDirection: "column",padding:5,paddingLeft:12,alignItems:'center' }}>
        <Image source={i19}
        style ={{width: 20,
          height: 20,}}/>
      
      <Text  style={{fontSize: 18,color:'gray'}}>Settings</Text>
      </View>

      <View style={{marginBottom:4,flexDirection: "column",padding:5,paddingLeft:40,alignItems:'center' }}>
        <Image source={i15}
        style ={{width: 20,
          height: 20,}}/>
      
      <Text  style={{fontSize: 18,color:'gray'}}>Report Issue</Text>
      </View>
     </View>

     <View style={{marginBottom:4,flexDirection: "row",padding:5,paddingLeft:20,top:8,alignItems:'center' }}>

<View style={{marginBottom:4,flexDirection: "column",padding:11,paddingLeft:12,alignItems:'center' }}>
  <Image source={i21}
  style ={{width: 20,
    height: 20,}}/>

<Text  style={{fontSize: 18,color:'gray'}}>Sign Out</Text>
</View>

<View style={{marginBottom:4,flexDirection: "column",padding:5,paddingLeft:50,alignItems:'center' }}>
  <Image source={i16}
  style ={{width: 20,
    height: 20,}}/>

<Text  style={{fontSize: 18,color:'gray'}}>Rate App</Text>
</View>
</View>



    </View>
  );
      }
const Drawer = createDrawerNavigator({

  HomeStack,
  SignIn,

},{
  contentComponent: CustomDrawer,
},

)

const AppCon = createAppContainer(

createSwitchNavigator(
  {
    FirstStack,
    // HomeStack,
    Drawer,
    WhereToGo,

  },
  {
    initialRouteName: 'WhereToGo',
 
 }
)

);

  export default AppCon;
