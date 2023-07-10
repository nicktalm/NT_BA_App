import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { Dimensions } from 'react-native';

const Site1 = ({navigation})=>{

    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Über mich</Text>
            </View>
            <Text style={styles.Fließtext}>Auf dieser Unterseite der App finden Sie eine kleine Vorstellung des Entwicklers dieser App:</Text>
            <Text style={styles.Fließtext}></Text>
            <Text style={styles.Fließtext}>Hallo zusammen,</Text>
            <Text style={styles.Fließtext}>mein Name ist Nick Talmon, ich bin zum aktuellen Zeitpunkt 23 Jahre alt und studieren Kommunikation und Medienmanagement an der Hochschule Karlsruhe.</Text>
            <Text style={styles.Fließtext}>Diese App ist im Rahmen meiner Bachelorarbeit im Sommersemester 2023 unter der Betreueung von Herr Professor Schober entstanden und soll zuküftigen Studenten dabei helfen ein React Native-Projekt zu starten.</Text> 
            <Text style={styles.Fließtext}>In der App wird ebenfalls erkärt, wie man mit Bildern, Videos und 3D-Modellen arbeitet und diese verwenden kann. Dazu gibt es zusätzlich einen kleinen Testbereich in dem man verschiedene Attribute ausprobieren kann und sofort sieht, wie diese sich auf die betroffenen Elemente auswirken.</Text>  
            <Text style={styles.Fließtext}>Wenn Sie gerade diese App von Herr Schober zur Verfügung gestellt bekommen haben und noch Fragen haben können Sie sich gerne jederzeit bei mir unter meiner privaten Email-Adresse melden: nicktalmon@yahoo.de</Text>
            <Text style={styles.Fließtext}>Sonst wünsche ich Ihnen weiterhin Viel Erfolg mit React Native und eine Gute Zukunft.</Text>
            <Text style={styles.Fließtext}>Nick Talmon</Text>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TopView:{
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
      marginBottom:20,
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
