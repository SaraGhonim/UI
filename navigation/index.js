import React, { Component } from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import WhereToGo from "../screens/whereToGo";
import Logging from "../screens/logging";
import Home from '../screens/home';

const FirstStack = createStackNavigator(
{
Logging,
Home,

},{  headerMode: 'none'
}


);


const AppCon = createAppContainer(
    
    FirstStack,
    WhereToGo
    
  );

  export default AppCon;
