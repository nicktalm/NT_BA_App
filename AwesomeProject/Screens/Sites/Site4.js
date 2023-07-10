import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { Linking } from 'react-native';

const Site4 = ({navigation})=>{

  function navigate(){
    navigation.navigate('Site5');
  }
  function navigate2(){
    navigation.navigate('Site3');
  }
  function navigate3(){
    navigation.navigate('Home');
  }
  
    return(
      <View>
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Xcode</Text>
            </View>
            <Text style={styles.Fließtext}>
            Der einfachste Weg, Xcode zu installieren, führt über den&nbsp;
            <Text style={{color: '#03396C',}} onPress={() => Linking.openURL('https://github.com/facebook/react-native/blob/v0.71.3/.ruby-version')}>
            Mac App Store&nbsp;
            </Text>. Mit der Installation von Xcode werden auch der iOS-Simulator und alle erforderlichen Tools für die Erstellung Ihrer iOS-App installiert.
            </Text>
            <Text style={styles.Fließtext}> 
            Wenn Sie Xcode bereits auf Ihrem System installiert haben, vergewissern Sie sich, dass es sich um Version 10 oder eine neuere Version handelt.
            </Text>
            <Text style={styles.Fließtext}> 
            Um die aktuelle Version von Ruby zu überprüfen, können Sie diesen Befehl ausführen:
            </Text>
            <Text style={styles.FließtextHeadline}> 
            Command Line Tools</Text>
            <Text style={styles.Fließtext}> 
            Sie müssen auch die Xcode Command Line Tools installieren. Öffnen Sie Xcode und wählen Sie dann "Einstellungen" aus dem Xcode-Menü. Gehen Sie zum Bedienfeld "Speicherorte" und installieren Sie die Tools, indem Sie die neueste Version im Dropdown-Menü "Befehlszeilen-Tools" auswählen.
            </Text>
            <View style={styles.ImageStyle}>
            <Image style={styles.ImageStyleBild} source={require('../../Assets/images/Xcode.png')} />
            </View>
            <Text style={styles.FließtextHeadline}> 
            Installing an iOS Simulator in Xcode</Text>
            <Text style={styles.Fließtext}> 
            Um einen Simulator zu installieren, öffnen Sie <Text style={{fontWeight:'bold',}} >
            Xcode > Einstellungen > Behaviors > Edit Behaviros&nbsp;
            </Text>und wählen Sie die Registerkarte Platforms. Wählen Sie einen Simulator mit der entsprechenden Version von iOS, die Sie verwenden möchten.
            </Text>
            <Text style={styles.FließtextHeadline}> 
            CocoaPods</Text>
            <Text style={styles.Fließtext}>  
            <Text style={{color: '#03396C',}} onPress={() => Linking.openURL('https://cocoapods.org')}>
            CocoaPods&nbsp;
            </Text>
            ist eines der für iOS verfügbaren Systeme zur Verwaltung von Abhängigkeiten. Es wurde mit Ruby erstellt und Sie können es mit der Ruby-Version installieren, die Sie in den vorherigen Schritten konfiguriert haben.
            </Text>
            <Text style={styles.Fließtext}>
            Weitere Informationen finden Sie in der Anleitung&nbsp;
            <Text style={{color: '#03396C',}} onPress={() => Linking.openURL('https://cocoapods.org')}>
            CocoaPods Getting Started guide.
            </Text>
            </Text>
            <Text style={styles.FließtextHeadline}> 
            React Native Command Line Interface</Text>
            <Text style={styles.Fließtext}> 
            React Native hat eine eingebaute Kommandozeilenschnittstelle. Anstatt eine bestimmte Version der CLI global zu installieren und zu verwalten, empfehlen wir Ihnen, die aktuelle Version zur Laufzeit mit npx, das mit Node.js ausgeliefert wird, abzurufen. Mit npx react-native command wird die aktuelle stabile Version der CLI heruntergeladen und ausgeführt, wenn der Befehl ausgeführt wird.
            </Text>
           
        </ScrollView>
        <View style={styles.ForwardbuttonBox}>
            <TouchableOpacity style={styles.Forwardbutton} onPress={navigate2}>
            <Icon style={styles.ArrowRightIcon} name="arrow-left" size={45} color={"#fff"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Forwardbutton} onPress={navigate3}>
            <Icon style={styles.ArrowRightIcon} name="home" size={45} color={"#fff"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Forwardbutton} onPress={navigate}>
            <Icon style={styles.ArrowRightIcon} name="arrow-right" size={45} color={"#fff"}/>
            </TouchableOpacity>
            </View>
      </View>
    )
}
const styles = StyleSheet.create({
    TopView:{
      height:Dimensions.get("window").height-210,
    },
    HeadlineBox:{
      paddingLeft:30,
      paddingRight:30,
      height:50,
      marginTop:20,
    },
    Headline:{
      fontSize:28,
      fontWeight:'bold',
      color:'#03396C'
    },
    Fließtext:{
      marginBottom:10,
      paddingLeft:30,
      paddingRight:30,
    },
    FließtextHeadline:{
        marginBottom:5,
        paddingLeft:30,
        paddingRight:30,
        fontWeight:'bold',
        fontSize:18,
        marginTop:10
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
        marginBottom:20,
        marginTop:10
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
      marginTop:-60,
      marginBottom:-60,
      width:'50%',
      resizeMode:'contain',
    },
    ImageStyleBild:{
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").width,
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
      }
  })
export default Site4;
