/* eslint-disable prettier/prettier */

import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity,Input,Button, StatusBar, Image} from "react-native";
import LoginForm from "./LoginForm";

const ForgetPassword = ({navigation}) => {
    const [currentPassword, setCurrentPass] = useState('test1234');
const [newPassword, setNewPass] = useState('');
const [reEnter, setReenter] = useState('');
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Current Password"
        numberOfLines={1}
        maxLength={25}
        placeholderTextColor="#000"
        onChangeText={(currentPassword) => setCurrentPass(currentPassword)}
      />
    </View>

    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="New Password"
        placeholderTextColor="##000"
        numberOfLines={1}
        maxLength={35}
        secureTextEntry={true}
        multiline={false}
        onChangeText={(newPassword) => setNewPass(newPassword)}
      />
    </View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Confirm"
        placeholderTextColor="#000"
        numberOfLines={1}
        maxLength={35}
        secureTextEntry={true}
        multiline={false}
        onChangeText={(reEnter) => setReenter(reEnter)}
      />
    </View>

    <TouchableOpacity style={styles.forgot_button}
      onPress={() => navigation.navigate('LoginForm')
      }>
      <Text>Submit</Text>
         
      </TouchableOpacity>
    </View>

  )
};
const styles = StyleSheet.create({

    TextInput: {
        height: 80,
        flex: 1,
        padding: 10,
        marginLeft: 20,
        color:"#000"
         
      },
      inputView: {
        backgroundColor: "#aaa",
        borderRadius: 15,
        width: "80%",
        height: 60,
        marginBottom: 20,
     
      //   alignItems: "center",
      },
      forgot_button: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#FF1",
      },
    });
export default ForgetPassword;
