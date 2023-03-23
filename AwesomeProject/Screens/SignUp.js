import React from "react";
import { Text, StyleSheet, Button, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import '../Assets/images/Mobi2.png';
import Icon from 'react-native-vector-icons/Feather'


const SignUp = ()=>{
  
  function navigate(){
    navigation.navigate('SignUp');
  }
    return(
  <View style={styles.mainView}>
    <View style={styles.TopView}>
        <Image style={styles.ImageStyle} source={require('../Assets/images/Mobi2.png')} />
    </View>
      <ScrollView style={styles.BottomView}>
          <Icon name="chevron-left" size={30} color={"red"}/>
          <Text style={styles.Heading}>
          CREATE{'\n'}
          ACCOUNT
          </Text>
            <View style={styles.FormView}>
              <TextInput placeholder={"Full Name*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Email adress*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Mobile*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Password*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Confirm Password*"} secureTextEntry={true} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
                <TouchableOpacity style={styles.Button}>
                  <Text style={styles.ButtonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
      
      </ScrollView>
  </View>
    )
}
const styles = StyleSheet.create({
    mainView:{
      marginTop:40,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    mainView:{
      marginTop:40,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    TopView:{
      width:'100%',
      height:'20%',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    BottomView:{
      width:'100%',
      height:'80%',
      backgroundColor:'#000',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    },
    ImageStyle:{
      width:'50%',
      resizeMode:'contain'
    },
    Heading:{
      color:'#fff',
      fontSize:40,
      fontWeight:'bold',
      marginLeft:30,
      marginTop:60,
    },
    FormView:{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:10,
    },
    TextInput:{
      width:'90%',
      borderWidth:1,
      borderColor:'#fff',
      height:52,
      borderRadius:10,
      paddingLeft:15,
      marginTop:20,
      color:"#fff",
    },
    Button:{
      width:'90%',
      color:"#000",
      height:52,
      backgroundColor:"#fff",
      borderRadius:10,
      marginTop:20,
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
    },
    ButtonText:{
      fontWeight:'bold',
      fontSize:18,
    },
    SignUpText:{
      color:'gray',
    },
    TextButton:{
      width:'100%',
      display:'flex',
      alignItems:'center',
      marginTop:20,
    },
    
  })
export default SignUp;