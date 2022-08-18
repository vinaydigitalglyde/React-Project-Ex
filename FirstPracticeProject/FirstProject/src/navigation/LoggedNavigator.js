/* eslint-disable prettier/prettier */

import React from "react";
import { Platform, StatusBar, View, TouchableOpacity } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Profiles from '../screens/Profiles';
import LoginForm from '../screens/LoginForm';
import Settings from "../screens/Settings";
import ForgetPassword from "../screens/ForgetPassword";
import drawerHome from './drawerContentComponents';
 
const Stack = createStackNavigator();
export default function MyStack()
{

    return(
        <>
        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
    <Stack.Screen
    name="LoginForm"
    component={LoginForm}
    options = {({navigation}) => ({
    title: 'Login',
    headerShown: false,

})} 

    /> 

        <Stack.Screen

        name="Home"
        component={drawerHome}
        options = {({navigation}) => ({
        title: 'Home',
        headerShown: false,

        })} 
        />
        <Stack.Screen

name="ForgetPassword"
component={ForgetPassword}
options = {({navigation}) => ({
title: 'ForgetPassword',
headerShown: false,

})} />

          <Stack.Screen

name="Profiles"
component={Profiles}
options = {({navigation}) => ({
title: 'Profiles',
headerShown: false,

})}

        /> 
          <Stack.Screen

name="Settings"
component={Settings}
options = {({navigation}) => ({
title: 'Settings',
headerShown: false,

})}

        /> 


        </Stack.Navigator>




    </>);

}
