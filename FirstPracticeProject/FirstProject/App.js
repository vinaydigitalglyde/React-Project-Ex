/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from './src/screens/LoginForm';
import RootNavigator from "./src/navigation/RootNavigator";
import LoggedNavigator from "./src/navigation/LoggedNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { drawerContentComponents } from './src/navigation/drawerContentComponents';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import Profiles from './src/screens/Profiles';
import ForgetPassword from './src/screens/ForgetPassword';
import Settings from './src/screens/Settings';
// import { Tab } from 'react-native-elements/dist/tab/Tab';

const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import LoginForm from './src/screens/LoginForm';
// import Profiles from './src/screens/Profiles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  


  //   {
  //     Home: LoginForm,
  //     components: Profiles
  //   },
  //   {
  //     initialRouteName: 'Home',
  //     defaultNavigationOptions: {
  //       title: 'App'
  //     }
  //   }


  // );
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (

    
    
    // <SafeAreaView style={{backgroundColor:"#7d7d", height:400, width: 400}}>
    //  <SafeAreaView style={{flex:1, backgroundColor:"#7d7d"}}>
    //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //   {/* <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}> */}
    //     {/* <Header /> */}
    //     <View
    //       style={{
    //        flex:0.5, backgroundColor:"#7d7d7d"
    //       }}>
         
    <>
          {/* <NavigationContainer>
      <RootNavigator />
      
    </NavigationContainer> */}

 <NavigationContainer>
<LoggedNavigator/>
</NavigationContainer>  

</>
//         </View>
//       {/* </ScrollView> */}
//     </SafeAreaView>
  );
};



// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
