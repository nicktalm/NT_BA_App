import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';

const Site1 = ({navigation})=>{

    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>3DModell einbinden</Text>
            </View>
            <Text style={styles.Fließtext}>Das Einbinden von 3D-Modellen in React Native erfordert die Verwendung einer 3D-Bibliothek oder eines Frameworks, da React Native selbst keine na-tiven 3D-Funktionen bietet. Eine beliebte Bibliothek, um 3D-Modelle in React Native einzubinden, ist "react-native-3d-model-view". Dieses Paket installierst du in dem du folgenden Befehl in der Kommandozentrale ausführst.</Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            npm install react-native-3d-model-view
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"npm install react-native-3d-model-view")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.Fließtext}>Die nötige Komponente von React Native muss wie bei den beiden oben ste-hen Medien am Anfang der Datei importiert werden. Dies könnte beispiels-weise so aussehen:</Text>
            <View style={styles.ImageStyle}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Modell_1.png')} />
            </View>
            <Text style={styles.Fließtext}>Die „ModelView“-Komponente wird verwendet, um das 3D-Modell einzubin-den. Der „source“-Prop muss den genauen Pfad oder die URL des 3D-Modells enthalten.</Text>
            <View style={styles.ImageStyle2}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Scrennshots/Modell_2.png')} />
            </View>
            <Text style={styles.Fließtext}>Im obenstehenden Beispiel wird ein 3D-Modell mit dem Dateityp „.obj“ von der angegebenen URL geladen. Das "react-native-3d-model-view“-Paket hat ver-schiedene Optionen und Eigenschaften, um die Darstellung und das Verhal-ten des 3D-Modells anzupassen.</Text>
            <Text style={styles.Fließtext}>Es gibt auch noch weitere 3D-Bibliotheken oder Frameworks, um 3D-Modelle in React Native einzubinden, beispielsweise "react-native-unity-view" in Kom-bination mit Unity oder "react-native-gl-model-view" in Kombination mit WebGL. Die Auswahl der Bibliothek hängt wie so oft von den spezifischen An-forderungen und dem gewünschten Funktionsumfang des React Native-Projektes ab.</Text>  
            <Text style={styles.Fließtext}>Das Einbinden von 3D-Modellen ist aber deutlich anspruchsvoller, als das Einbinden von Bildern und Videos und daher sollte man sich intensiv mit der 3D-Bibilothek seiner Wahl vetraut machen.</Text>
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
      marginTop:-130,
      marginBottom:-110,
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
      marginTop:10,
      backgroundColor:'#03396C',
      height:50,
      display:'flex',
      alignItems:'flex-start',
      justifyContent:'flex-start',
      flexDirection:'row',
      justifyContent:'space-between',
      borderRadius:10,
      marginBottom:20,
      paddingLeft:20,
      paddingRight:20,
      marginLeft:20,
      marginRight:20
    },
    kopierText:{
      color:'white',
      marginLeft:0,
      marginTop:15,
    },
    kopierTextButton:{
      marginRight:0,
      marginTop:3.5,
    },
    backgroundVideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    video:{
      width:Dimensions.get("window").width-60,
      height:(Dimensions.get("window").width-60)/(16/9),
      marginLeft:30,
      marginBottom:10,
    },
  })
export default Site1;
