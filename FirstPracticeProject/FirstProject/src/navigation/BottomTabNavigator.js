/* eslint-disable prettier/prettier */

import React from "react";
import { getFocusedRouteNameFromRoute,StackActions } from "@react-navigation/native";
import { Platform, StatusBar, View, TouchableOpacity } from "react-native";

const BottomTabNavigator = ({navigation, route}) => {


function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';
  
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Profiles':
        return 'Profile';
      case 'Settings':
        return 'Settings';
        case 'LoginForm':
        return 'Login';
    }
  }
  
  React.useLayoutEffect(() => {
      navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    }, [navigation, route]);
}
export default BottomTabNavigator;