import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,} from 'react-native';

export default class SignIn extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        click: 2
      };
    }
  
    render() {
      
      return (

<> 
 <View style={{marginBottom:20}}>

   <TextInput
   keyboardType="email-address"
   autoCorrect={false} maxLength={30} multiline={false}
    placeholder="Moblie Number"
    underlineColorAndroid = "#ffd420">
   </TextInput>
</View>   
   <View style={{marginBottom:30}}>

   <TextInput underlineColorAndroid = '#ffd420'
                placeholder="Password"
                name ='Password'>

   </TextInput>

   </View>
   
   {/* //this.props.navigation.navigate('Home') */}
   <TouchableOpacity style={styles.buttonContainer2} onPress={()=>this.props.navigation.navigate('Home')}>
   <Text style={{textAlign:'center',  paddingTop:5}}> Sign in</Text>
  </TouchableOpacity>  
  <Text style={{textAlign:'center',color:'#242a37'}}>  Need Support?</Text>


</>


      )
    }
}
const styles=StyleSheet.create({

 buttonContainer2:{
        backgroundColor:'#f1f2f6',
    
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        height: 35,
        margin:15,
        alignItems: 'center',marginBottom:60
    },

})