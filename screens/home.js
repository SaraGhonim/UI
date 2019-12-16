import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,Image} from 'react-native';
import i9 from '../assets/i9.png'
import i8 from '../assets/i8.png'
import i7 from '../assets/i7.png'
import i6 from '../assets/i6.jpg'
import i5 from '../assets/i5.png'
import i4 from '../assets/i4.png'
import i3 from '../assets/i3.jpg'

import Divider from 'react-native-divider';


export default class Home extends Component {
    constructor(props) {
        super(props);
      
    
        this.state = {
          icon9:i9,
          icon8:i8,
          icon7:i7,
          icon6:i6,
          icon5:i5,
          icon4:i4,
          icon3:i3
        }
    
      };
    


    render(){

        const {icon9,icon8,icon7,icon6,icon5,icon4,icon3}=this.state;

        return(

            
       
    <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#ffffff',}}>
          
            {/* <View style={{height:500}}>
              <Image source={icon9}
             style={{ width: 500,
            height: 650,
            resizeMode: 'contain'}} /> 
           </View> */}

           {/* <View style={{paddingLeft :10,paddingRight: 10}}>

       <Image source={icon4}
       style={{ width: 25,
       height: 25s,
      resizeMode: 'contain'}}
           />
      </View> */}
             
            <View style={styles.trans}>
                <View style={{flexDirection:'column'}}>
            <View style={{marginBottom:4,flexDirection: "row", }}>

            <View style={{paddingLeft :10,paddingRight: 15}}>

       <Image source={icon6}
       style={{ width: 35,
       height: 35,
      resizeMode: 'contain'}}
           />
      </View>
      <View
  style={{
  borderLeftWidth: 1,
  borderLeftColor: 'black',
  
  }}
/>
              <View style={{paddingLeft :20,paddingRight:20}}>
            <Image source={icon8}
             style={{ width: 35,
                height: 35,
                resizeMode: 'contain', }}/>
               </View>

               <View
  style={{
  borderLeftWidth: 1,
  borderLeftColor: 'black',
  
  }}
/>
              <View style={{paddingLeft :20,paddingRight:20}}>

                <Image source={icon7}
                style={{ width: 35,
                height: 35,
                resizeMode: 'contain'}}
                 />
               </View>

               <View style={{ borderLeftWidth: 1, borderLeftColor: 'black',}}/>

               <View style={{paddingLeft :25,paddingTop:9}}>
               <Image source={icon5}
               style={{ width: 15,
                height: 15,
                resizeMode: 'contain',}}     />
               </View>
 
            
  </View>
  
<Divider borderColor="black" color="black" orientation="center"></Divider>


  <View style={{flexDirection:'row'}}>
  <TextInput style={{paddingTop:20,paddingRight:155}}
keyboardType="email-address"
autoCorrect={false} multiline={false}
 placeholder="  Lets'Go"
 placeholderTextColor="#000000" 

 >
</TextInput>
<View style={{height:45,paddingTop:20}}> 
<View
  style={{
  borderLeftWidth: 1,
  borderLeftColor: 'black',
  paddingTop:30
  
  }}
/>
</View>

<View style={{paddingTop:19,paddingLeft:23}}>
               <Image source={icon3}
               style={{ width: 25,
                height: 35,
                resizeMode: 'contain',}}     />
              

</View>


  </View>
  

 
  </View>

  

            </View>
        </View>

            
        )
    }
}


const styles=StyleSheet.create({
    trans:{
        backgroundColor: 'white',
        height: 110,
        width:290,
        borderTopLeftRadius: 10,
           borderTopRightRadius: 10,
           borderBottomLeftRadius:10,
           borderBottomRightRadius:10,
           padding:10,
        //    position:'absolute',
        marginBottom:60
 
    },

   container:{
           backgroundColor:'#242a37',
           backgroundColor: 'rgba(52, 52, 52, 0.5)',

           borderTopLeftRadius: 10,
           borderTopRightRadius: 10,
           borderBottomLeftRadius:10,
           borderBottomRightRadius:10,
           height: 45,
           width: 200,
           
           alignItems: 'center'
       },
   
   })     