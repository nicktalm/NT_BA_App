import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from "react-native";
import { Dimensions } from 'react-native';


const Site1 = ({navigation})=>{

    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Bild einbinden</Text>
            </View>
            <Text style={styles.Fließtext}>Um ein Bild in React Native einzubinden, muss es im Projektverzeichnis deines Projektes vorhanden sein. Im besten Fall sollte das Bild im „asset“-Ordner abliegen.</Text>
            <Text style={styles.Fließtext}>Die nötige Komponente von React Native muss am Anfang der Datei importiert werden. Dies könnte beispielsweise so aussehen:</Text>
            <View style={styles.ImageStyle}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Bild_1.png')} />
            </View>
            <Text style={styles.Fließtext}>Die „Image“-Komponente wird verwendet, um das Bild einzubinden. Der „source“-Prop muss den Pfad zum Bild enthalten, dieser Pfad kann relativ oder absolut sein. Das könnte beispielsweise folgendermaßen aussehen:</Text>
            <View style={styles.ImageStyle2}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Bild_2.png')} />
            </View>
            <Text style={styles.Fließtext}>In diesem Beispiel wird das Bild „meinBild.jpg“ aus dem „asset“-Ordner eingebunden. Falls das Bild beispielsweise in einem Unterordner „Bilder“ liegt, könnte der Pfad folgendermaßen angegeben werden:</Text>
            <View style={styles.ImageStyle2}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Bild_3.png')} />
            </View>
            <Text style={styles.Fließtext}>Der Pfad, beim Verwenden der „require“-Funktion, muss genau mit dem Dateinamen übereinstimmen. Auch auf Groß- und Kleinschreibung muss man achten.</Text>  
            <Text style={styles.Fließtext}>Es gibt noch weitere Möglichkeiten Bilder in React Native einzubinden, z.B. mit einer Remote-URL. Die Vorgehensweise hängt von den Anforderungen des Projektes ab.</Text>
            <Text style={styles.Fließtext}></Text>
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
      marginTop:-140,
      marginBottom:-120,
      width:'50%',
      resizeMode:'contain',
      marginLeft:30,
      marginRight:30,
    },
    ImageStyle2:{
      marginTop:-110,
      marginBottom:-90,
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
