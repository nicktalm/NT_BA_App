import React from "react";
import { Text, StyleSheet, Button, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import BackIcon from 'react-native-vector-icons/Feather'


const SignUp = ({navigation})=>{

  function navigate(){
    navigation.navigate('SignIn');
  }
  function navigate2(){
    navigation.navigate('Home');
  }
    return(
  <View style={styles.mainView}>
    <View style={styles.TopView}>
        <Image style={styles.ImageStyle} source={require('../Assets/images/LogoApp.png')} />
    </View>
      <ScrollView style={styles.BottomView}>
          <BackIcon style={styles.BackIcon} onPress={navigate} name="chevron-left" size={60} color={"#fff"}/>
          <Text style={styles.Heading}>
          ACCOUNT{'\n'}
          ERSTELLEN
          </Text>
            <View style={styles.FormView}>
              <TextInput placeholder={"Ganzer Name*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"E-Mail-Adresse*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Telefonnummer*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Passwort*"} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
              <TextInput placeholder={"Passwort bestätigen*"} secureTextEntry={true} placeholderTextColor="#fff" style={styles.TextInput}></TextInput>
                <TouchableOpacity style={styles.Button}>
                  <Text style={styles.ButtonText} onPress={navigate2}>Registrieren</Text>
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
      backgroundColor:'#03396C',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    },
    ImageStyle:{
      width:'50%',
      resizeMode:'contain',
      marginTop:40
    },
    Heading:{
      color:'#fff',
      fontSize:40,
      fontWeight:'bold',
      marginLeft:30,
      marginTop:10,
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
      color:'#03396C'
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
    BackIcon:{
      marginLeft:5,
      marginTop: 10,
    }
    
  })
export default SignUp;