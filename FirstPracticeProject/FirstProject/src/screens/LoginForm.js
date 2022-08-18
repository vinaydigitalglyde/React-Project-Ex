/* eslint-disable prettier/prettier */


import React, { useEffect, useState } from "react";
import { View, Card, Text, TextInput, StyleSheet, TouchableOpacity,Input,Button, StatusBar, Image, Alert,ActivityIndicator} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "./Home";
import Profiles from "./Profiles";
import ForgetPassword from "./ForgetPassword";
import { Value } from "react-native-reanimated";

const LoginForm = ({navigation}) => {

 
    // const [signingIn, setSigningIn] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const [isLoader,setIsLoader]=useState(false)
      
  const setData = async () => {
    setIsLoader(true)
    if(email.length==0 || password.length==0)
    {
      Alert.alert('Email & Password required')
      setIsLoader(false)
    }
    else if(email!=="vinay@glyde.com"||password!=="test1234")
    {
      Alert.alert('Email & Password is not valid')
      setIsLoader(false)
    }
    else{

      try{

        var user = {

          Email: email,
          Password:password

        }
        await AsyncStorage.setItem('UserData', JSON.stringify(user));
        navigation.navigate('Home');
        setIsLoader(false)
      }catch(error)
      {
        console.log(error);
        setIsLoader(false)
      }

    }

  }
return(

    <View style={styles.container}>
    {isLoader&&
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="small" color="#0000ff"  />
    
    </View>
    }
    {/* <Text>LOGIN</Text> */}
    <Image style={styles.image} source={require("../assets/info.png")} /> 

    <Text style={styles.loginText}>LOGIN</Text> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          numberOfLines={1}
          maxLength={25}
          placeholderTextColor="#003f5c"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          numberOfLines={1}
          maxLength={35}
          secureTextEntry={true}
          multiline={false}
          value={password}
          onChangeText={(value) => setPassword(value)}
        />
      </View>
 
      <TouchableOpacity style={styles.forgot_button}
      onPress={() => navigation.navigate('ForgetPassword')
      }>
      <Text>forget password?..</Text>
         
      </TouchableOpacity>
 
      {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
         onPress = {() => navigation.navigate('Profiles')} 
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.loginBtn}

          onPress={()=>setData()}>

          <Text style={styles.loginText}>Login</Text>

        </TouchableOpacity>
        {/* {isLoader&& */}
        {/* <View style={{display:'block'}}> */}
        {/* </View> */}
        {/* } */}
        
    </View>



    // <View style={{backgroundColor:"#7d7d", height:400, width: 400}} >
     
    // <Card containerStyle = {{backgroundColor: "#7d7d7d"}}>
    
    // <TextInput placeholder="Email" label = "Email" value={email} 
    
    // onChangeText = {(text) => setEmail(text)}

//     placeholderTextColor="#fff" inputStyle = {{color:"#7d7d"}}

//     labelStyle={{color: '#fff'}}/>

//     <Input secureTextEntry placeholder="Password..." 
//     />
//    <TextInput label="Password" value={password} onChangeText={(text) => setPassword(text)} 
    
//     placeholderTextColor="#fff" inputStyle={{ color: '#7d7d' }} 
    
//     labelStyle={{ color: '#fff' }} />

// <Button
           
//             // backgroundColor="#03A9F4"
//             title="Submit"
//             onPress={() => navigation.navigate('Profiles')}
                    
              
//           />
// <TouchableOpacity>



// </TouchableOpacity> */}


//     {/* </Card> */} 





//     // </View>

);
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#03A9F4",
      alignItems: "center",
      justifyContent: "center",
    },
   loader: {

      position: "fixed",
  
      top: "0",
  
      left: "0",
  
      right: "0",
  
      bottom: "0",
  
      background: "red",
  
      zIndex: "100",
  
      display: "table",
  
      width: "100%",
  
      height: "100%"
  
    },
    image: {
      marginBottom: 5,
      height: 75,
      width:100
    },
    loginText:{
      flex:0,
       padding:5
    },
    inputView: {
      backgroundColor: "#aaa",
      borderRadius: 15,
      width: "80%",
      height: 60,
      
      marginBottom: 20,
   
    //   alignItems: "center",
    },
   
    TextInput: {
      height: 80,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      color:"#"
       
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 5,
      color:"#fff"
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FF1",
    },
  });
export default LoginForm;