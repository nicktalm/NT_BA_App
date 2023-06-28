import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';
import { Linking } from 'react-native';
import ModelView from 'react-native-gl-model-view';

const Site1 = ({navigation})=>{

    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>3D Modell einbinden</Text>
            </View>
            <Text style={styles.Fließtext}>Dieses Tutorial hilft Ihnen bei der Installation und Erstellung Ihrer ersten React Native App.</Text>
            <Text style={styles.Fließtext}>React Native wird von vielen verschiedenen Personen genutzt: von fortgeschrittenen iOS-Entwicklern über React-Anfänger bis hin zu Personen, die zum ersten Mal in ihrer Karriere mit der Programmierung beginnen. Diese Tutorial wurden für alle Lernenden geschrieben, unabhängig von ihrem Erfahrungsstand oder Hintergrund.</Text>
            <Text style={styles.Fließtext}>Wir werden mit React Native CLI arbeiten. Für den Start ist Xcode erforderlich. Wenn Sie bereits eines dieser Tools installiert haben, sollten Sie in der Lage sein, innerhalb weniger Minuten loszulegen. Wenn sie nicht installiert sind, sollten Sie etwa eine Stunde für die Installation und Konfiguration einplanen.</Text>
            <Text style={styles.Fließtext}>In diesem Tutorial geht es um eine Entwicklung mit einem MacOS Gerät für ein iOS Gerät.</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TopView:{
      
      backgroundColor:'white',
    },
    HeadlineBox:{
      paddingLeft:30,
      paddingRight:10,
      height:50,
      marginTop:20,
    },
    Headline:{
      fontSize:28,
      fontWeight:'bold',
      color:'#03396C',
    },
    Fließtext:{
      marginBottom:15,
      paddingLeft:30,
      paddingRight:30,
      fontSize:15
    },
    ArrowRightIcon:{
      
    },
    ForwardbuttonBox:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#03396C',
      height:80,
      borderRadius:50,
      paddingLeft:30,
      paddingRight:30,
      marginLeft:10,
      marginRight:10,
      marginTop:20,
    },
    Forwardbutton:{
      width:'25%',
      color:"#fff",
      height:50,
      backgroundColor:'lightblue',
      borderRadius:10,
      marginTop:15,
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
    },
    ImageStyle:{
      marginTop:20,
      width:'50%',
      resizeMode:'contain',
      marginLeft:30,
      marginRight:30,
    },
    ImageStyleBild:{
      width:Dimensions.get("window").width-60,
      height:Dimensions.get("window").width-60,
      resizeMode:'contain'
    },
    kopierTextBox:{
      marginTop:30,
      backgroundColor:'#03396C',
      height:50,
      display:'flex',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:10,
      marginBottom:20,
      paddingLeft:30,
      paddingRight:30,
      marginLeft:10,
      marginRight:10
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
