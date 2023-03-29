import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import ArrowRightIcon from 'react-native-vector-icons/Feather';
import '/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/images/Mobi2.png';

const Site1 = ({navigation})=>{

  function navigate(){
    navigation.navigate('Site2');
  }

    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Grundlagen</Text>
            </View>
            <Text style={styles.Fließtext}>React Native wird von vielen verschiedenen Personen genutzt: von fortgeschrittenen iOS-Entwicklern über React-Anfänger bis hin zu Personen, die zum ersten Mal in ihrer Karriere mit der Programmierung beginnen. Diese Dokumentationen wurden für alle Lernenden geschrieben, unabhängig von ihrem Erfahrungsstand oder Hintergrund.</Text>
            <Image style={styles.ImageStyle} source={require('/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/images/Mobi2.png')} />
            <View style={styles.ForwardbuttonBox}>
            <TouchableOpacity style={styles.Forwardbutton} onPress={navigate}>
            <ArrowRightIcon style={styles.ArrowRightIcon} onPress={navigate} name="arrow-right" size={45} color={"#fff"}/>
            </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    TopView:{
      marginTop:10,
      paddingLeft:30,
      paddingRight:30,
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
    },
    ArrowRightIcon:{
      
    },
    ForwardbuttonBox:{
      alignItems:"flex-end",
    },
    Forwardbutton:{
      width:'20%',
      color:"#fff",
      height:52,
      backgroundColor:'blue',
      borderRadius:10,
      marginTop:30,
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
    },
    ImageStyle:{
      marginTop:30,
      width:300,
      height:300,
      resizeMode:'contain'

    }

  })
export default Site1;