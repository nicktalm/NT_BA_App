import React from 'react';
import { Text, StyleSheet, Button, View, Image, TouchableOpacity, ScrollView } from "react-native";
import { TextInput } from 'react-native-gesture-handler';

const SignIn = ({navigation})=>{
  const [email, onEmailChange]=React.useState("");
  const [password, onPasswordChange]=React.useState("");

  const [errorMsg, onErrorMsgChange]=React.useState("");

  function navigate(){
    if(email==="Admin@h-ka.de"&&password==="Admin"){
    onErrorMsgChange("");
      navigation.navigate('Home');
  }
    else{onErrorMsgChange("!Falsche Eingabe!")}
  }
  function navigate2(){
    navigation.navigate('SignUp');
  }

    return(
        <View style={styles.mainView}>
            <View style={styles.TopView}>
              <Image style={styles.ImageStyle} source={require('../Assets/images/LogoApp.png')} />
            </View>
            <View style={styles.BottomView}>
                <Text style={styles.Heading}>
                WILLKOMMEN{'\n'}
                ZURÜCK
                </Text>
                <View style={styles.FormView}>
                  <TextInput onChangeText={onEmailChange} 
                  placeholder={"E-Mail-Adresse*"} placeholderTextColor="#fff" 
                  style={styles.TextInput}>
                  </TextInput>
                  
                  <TextInput onChangeText={onPasswordChange} 
                  placeholder={"Passwort*"} secureTextEntry={true} placeholderTextColor="#fff" 
                  style={styles.TextInput}>
                  </TextInput>
                  <Text style={styles.Fehler}>
                    {errorMsg}
                  </Text>
                  <TouchableOpacity style={styles.Button} onPress={navigate}>
                    <Text style={styles.ButtonText}>
                      Anmelden
                    </Text>
                  </TouchableOpacity>
                </View>
                  <TouchableOpacity style={styles.TextButton} onPress={navigate2}>
                    <Text style={styles.SignUpText}>Registrieren</Text>
                  </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Fehler:{
      color:'red',
      fontWeight:'bold',
      marginTop:20
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
      height:'40%',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    BottomView:{
      width:'100%',
      height:'60%',
      backgroundColor:'#03396C',
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
    },
    ImageStyle:{
      width:'70%',
      resizeMode:'contain'
    },
    Heading:{
      color:'#fff',
      fontSize:40,
      fontWeight:'bold',
      marginLeft:30,
      marginTop:40,
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
      color:"#03396C"
    },
    SignUpText:{
      color:'white',
    },
    TextButton:{
      width:'100%',
      display:'flex',
      alignItems:'center',
      marginTop:20,
    },


  })
export default SignIn;