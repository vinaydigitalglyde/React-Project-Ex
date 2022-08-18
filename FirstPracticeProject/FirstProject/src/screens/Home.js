/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {View, Card, Text, TextInput, StyleSheet, TouchableOpacity,Input,Button, StatusBar, Image, Alert} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginForm from './LoginForm';
import {createStackNavigator} from '@react-navigation/stack';
import Profiles from './Profiles';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RootNavigator from '../navigation/RootNavigator'


const Home = ({navigation,route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
      getData();
     
  }, []);

  const getData= () => {

    try{
      AsyncStorage.getItem('UserData').then(value => {

        if(value!=null)
        {
         let user = JSON.parse(value);
         setEmail(user.Email);
         setPassword(user.Password);
        }
      })
    }catch(error)
    {
      console.log(error);
    }

  }
  
  return (
    <View>
      <Text>
        {email}
      </Text>
      <Text>
        {password}
      </Text>
     {/* <View style={styles.container}>
     
        <RootNavigator/>
        
        </View> */}
    </View>

  )
};
// const styles = StyleSheet.create({
// container:{
//   marginTop:"152%"
// }
// });
export default Home;
