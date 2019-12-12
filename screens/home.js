import React, {Component} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity,} from 'react-native';

export default class Home extends Component {


    render(){

        return(
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#F5FCFF',}}>
            <Text style={{fontSize: 20,textAlign: 'center', marginTop: 10,}}>Welcome Home</Text>

            </View>
        )
    }
}


      