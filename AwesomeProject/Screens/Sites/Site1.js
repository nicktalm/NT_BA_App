import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import ArrowRightIcon from 'react-native-vector-icons/Feather';
import '/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/images/Mobi2.png';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';

const Site1 = ({navigation})=>{

  /*function navigate(){
    Clipboard.setString('hello world');
    navigation.navigate('Site2');
  }*/
  function navigate(){
    navigation.navigate('Site2');
  }
  function navigate2(){
    navigation.navigate('Home');
  }
  function navigate3(){
    navigation.navigate('Home');
  }
  
    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Grundlagen</Text>
            </View>
            <Text style={styles.Fließtext}>Diese App hilft Ihnen bei der Installation und Erstellung Ihrer ersten React Native App.</Text>
            <Text style={styles.Fließtext}>React Native wird von vielen verschiedenen Personen genutzt: von fortgeschrittenen iOS-Entwicklern über React-Anfänger bis hin zu Personen, die zum ersten Mal in ihrer Karriere mit der Programmierung beginnen. Diese Dokumentationen wurden für alle Lernenden geschrieben, unabhängig von ihrem Erfahrungsstand oder Hintergrund.</Text>
            <View style={styles.ImageStyle}>
            <Image style={styles.ImageStyleBild} source={require('/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/images/Mobi2.png')} />
            </View>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
              Ich will kopiert werden
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard('Ich will kopiert werden')}>
            <ArrowRightIcon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <View style={styles.ForwardbuttonBox}>
            <TouchableOpacity style={styles.Forwardbutton} onPress={navigate2}>
            <ArrowRightIcon style={styles.ArrowRightIcon} name="arrow-left" size={45} color={"#fff"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Forwardbutton2} onPress={navigate3}>
            <ArrowRightIcon style={styles.ArrowRightIcon2} name="home" size={45} color={"#fff"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Forwardbutton2} onPress={navigate}>
            <ArrowRightIcon style={styles.ArrowRightIcon2} name="arrow-right" size={45} color={"#fff"}/>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TopView:{
      marginTop:70,
      paddingLeft:30,
      paddingRight:20,
    },
    HeadlineBox:{
      height:50,
    },
    Headline:{
      fontSize:30,
      fontWeight:'bold',
      color:'blue'
    },
    Fließtext:{
      marginBottom:15
    },
    ArrowRightIcon:{
      
    },
    ForwardbuttonBox:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
    },
    Forwardbutton:{
      width:'30%',
      color:"#fff",
      height:60,
      backgroundColor:'blue',
      borderRadius:10,
      marginTop:30,
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
    },
    Forwardbutton2:{
      width:'30%',
      color:"#fff",
      height:60,
      backgroundColor:'red',
      borderRadius:10,
      display:'flex',
      marginTop:30,
      justifyContent:'center',
      alignItems:"center",
    },
    ImageStyle:{
      marginTop:20,
      width:'50%',
      resizeMode:'contain'
    },
    ImageStyleBild:{
      width:300,
      height:300,
      resizeMode:'contain'
    },
    kopierTextBox:{
      marginTop:30,
      backgroundColor:'blue',
      height:50,
      display:'flex',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:10,
    },
    kopierText:{
      color:'white',
      marginLeft:20,
      marginTop:15,
    },
    kopierTextButton:{
      marginRight:10,
      marginTop:3.5,
    }
  })
export default Site1;
