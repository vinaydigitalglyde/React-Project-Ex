/* eslint-disable prettier/prettier */

import React from "react";
import { Platform, StatusBar, View, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import NavigationContainer from "@react-navigation/native";
import LoginForm from "../screens/LoginForm";
import Profiles from "../screens/Profiles";
import Settings from "../screens/Settings";
import ForgetPassword from "../screens/ForgetPassword";
import { getFocusedRouteNameFromRoute, StackActions } from "@react-navigation/native";
import { Title } from "react-native-paper";
import { color } from "react-native-reanimated";
import { colors } from "react-native-elements";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = ({navigation, route,props}) =>{

    return(

        <Tab.Navigator screenOptions={({ headerShown: false })}>
            <Tab.Screen 
            name='Home' 
            component={Home} 
            initialParams={props}
            options={({ navigation }) => ({
                 tabBarIcon:({size,focused, color})=>{
                    return(
                        <Image 
                            style={{width: size, height:size}}
                            source={require("../assets/home.png")}
                        />
                    )
                 },
                    headerTitleAlign:'center',
                    headerStyle: {
                backgroundColor: "#7d7d"
            },
                    headerShown: true,
                })}
            />

             <Tab.Screen 
             name='Profiles' 
             component={Profiles} 
             initialParams={props}
             options={({ navigation }) => ({
                tabBarIcon:({size,focused, color})=>{
                    return(
                        <Image 
                            style={{width: size, height:size}}
                            source={require("../assets/profile.png")}
                        />
                    )
                 },
                headerTitleAlign:'center',
                    headerStyle: {
                backgroundColor: "#7d7d"
            },
                    headerShown: true,
                })}
             />
             <Tab.Screen 
             name='Settings' 
             component={Settings}
             initialParams={props}
             options={({ navigation }) => ({
                tabBarIcon:({size,focused, color})=>{
                    return(
                        <Image 
                            style={{width: size, height:size}}
                            source={require("../assets/settings.png")}
                        />
                    )
                 },
                headerTitleAlign:'center',
                    headerStyle: {
                backgroundColor: "#7d7d"
            },
                    headerShown: true,
                })}
             />
         </Tab.Navigator>
    )
}

const LoginFormStack = () => {

    return (

        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
        <Stack.Screen 
        name="LoginForm"
        component={LoginForm}
        // options={{tabBarLabel:'LoginForm'}}
        options={({navigation}) =>({
            headerShown:false,
            title: 'Login',
            headerStyle: {
                backgroundColor: "#7d7d7d"
            }
           
        })}


/>
        </Stack.Navigator>
    );}

const ProfilesStack = () => {

    return (

        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
        <Stack.Screen 
        name="Profiles"
        component={Profiles}
        // options={{tabBarLabel:'Profile'}}

        options={({navigation}) =>({
            headerShown:false,
             title: 'Profiles',
             headerStyle: {
                 backgroundColor: "#7d7d7d"
            }
           
        })}


/>
        </Stack.Navigator>
    )}

const HomeStack = () => {

    return (

        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
        <Stack.Screen 
        name="Home"
        component={BottomTabs}
        options={({navigation}) =>({
            headerShown:false,
            title: '',
            headerStyle: {
                backgroundColor: "#7d7d7d"
            }
           
        })}
        


/>
</Stack.Navigator>
    )}

const ForgetStack = () => {

return (

    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
    <Stack.Screen 
    name="ForgetPassword"
    component={ForgetPassword}
    options={({navigation}) =>({

        title: 'ForgetPassword',
        headerStyle: {
            backgroundColor: "#7d7d7d"
        }
       
    })}


/>
        </Stack.Navigator>

    )
}
const SettingsStack = () => {

    return (
    
        <Stack.Navigator screenOptions={{gestureEnabled: false}}>
        <Stack.Screen 
        name="Settings"
        component={Settings}
        options={({navigation}) =>({
            headerShown:false,
            title: 'Settings',
            headerStyle: {
                backgroundColor: "#7d7d7d"
            }
           
        })}
    
    
    />
            </Stack.Navigator>
    
        )
    }
export {LoginFormStack,ProfilesStack,HomeStack, ForgetStack, SettingsStack} 