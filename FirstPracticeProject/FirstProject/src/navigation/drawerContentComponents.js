/* eslint-disable prettier/prettier */

import React, {useEffect} from 'react';
import {ScrollView, Text, View, StyleSheet,TouchableOpacity, SafeAreaView} from 'react-native';
import { DrawerItem, createDrawerNavigator,drawerPosition,navigation} from '@react-navigation/drawer';
import { LoginFormStack, HomeStack, ProfilesStack, SettingsStack } from './router';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Drawer = createDrawerNavigator();



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7d7d',
    },
});
const CustomDrawerContent = ({drawerPosition, navigation, route}) =>
{
   
return (
     <SafeAreaView style={{ flex: 1, backgroundColor:'#7d7d' }}>

    <View style={styles.container}>

     <ScrollView contentContainerStyle={[
        {
            paddingTop: 10,
            paddingLeft: 30,
            paddingRight:0,
        },
    ]}

 style = {styles.container}>

<TouchableOpacity style={{
   

}}
>

<DrawerItem

    label="Home"
    Style={{ fontSize: 17,fontWeight: 'bold', color: '#7d7d7d',marginTop: 5 }}    
    onPress={() => {
    navigation.navigate('Home');
                            }}
 />
<DrawerItem

    label="Profiles"
    Style={{ fontSize: 17, fontWeight: 'bold', color: '#7d7d7d',paddingTop: 5}}
    //style={{ paddingTop: 5 }}
    onPress={() => {
    navigation.navigate('Profiles');
                            }}
 />

<DrawerItem

    label="LoginForm"
    Style={{ fontSize: 17, fontWeight: 'bold', color: '#7d7d7d',paddingTop: 5  }}
    onPress={() => {
    navigation.navigate('LoginForm');
                            }}
 />
<DrawerItem

label="Settings"
Style={{ fontSize: 17, fontWeight: 'bold', color: '#7d7d7d',paddingTop: 5  }}
onPress={() => {
navigation.navigate('Settings');
                        }}
/>

</TouchableOpacity>


</ScrollView>
    </View>

    </SafeAreaView>

);
};
const Navigator = () => {

    return (

        <Drawer.Navigator
        drawerContent={(props) => (
            <CustomDrawerContent {...props} />
        )}
    >
        <Drawer.Screen
                name="Home"
                component={HomeStack}
                // headerShown= {false}
                options={({ navigation 
                
                }) => ({
                    headerShown: false,
                })}
            />
            <Drawer.Screen
                name="Profiles"
                component={ProfilesStack}
                // headerShown= {false}
                options={({ navigation }) => ({
                    headerShown: true,
                })}
            />
            <Drawer.Screen
                name="LoginForm"
                component={LoginFormStack}
                // headerShown= {false}
                options={({ navigation }) => ({
                    headerShown: false,
                })}
            />
             <Drawer.Screen
                name="Settings"
                component={SettingsStack}
                // headerShown= {false}
                options={({ navigation }) => ({
                    headerShown: true,
                })}
            />
        </Drawer.Navigator>
    );

};

export default Navigator;
