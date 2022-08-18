/* eslint-disable prettier/prettier */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from '../screens/LoginForm';
import Profiles from '../screens/Profiles';
import Home from '../screens/Home';
import { createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Icon';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import { HomeStack, ProfilesStack, LoginFormStack } from './router';


// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// function BottomTabNavigator  () {

//     return (
//         <Tab.Navigator screenOptions={{ headerShown: false }}>
//             <Tab.Screen
//                 name="Home"
//                 component={HomeStack}
//                 options={{
//                     tabBarIcon: ({size, color}) => (<Icon name={"Home"} color={color} size={size} />)
//                 }}
//             />
//             <Tab.Screen 
//                 name="Contact" 
//                 component={ProfilesStack}
//                 options={{
//                     tabBarIcon: ({size, color}) => (<Icon name={"User"} color={color} size={size} />)
//                 }}
//             />
//         </Tab.Navigator>
//     )
// }

export default function MyStack(){

return(


{/* <Tab.Navigator>
  <Tab.Screen name='LoginForm' component={LoginForm}/> 
<Tab.Screen name='Home' component={Home}/>
<Tab.Screen name='Profiles' component={Profiles}/>
</Tab.Navigator> 
*/} 



);


}
// export default BottomTabNavigator;