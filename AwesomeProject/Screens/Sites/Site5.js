import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';
import { Linking } from 'react-native';

const Site5 = ({navigation})=>{

  /*function navigate(){
    Clipboard.setString('hello world');
    navigation.navigate('Site2');
  }*/
  function navigate(){
    navigation.navigate('Site6');
  }
  function navigate2(){
    navigation.navigate('Site4');
  }
  function navigate3(){
    navigation.navigate('Home');
  }
  
    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Erstellen einer{'\n'}
            neuen Anwendung</Text>
            </View>
            <Text style={styles.Fließtext}>
            Sie können die integrierte Kommandozeile von React Native verwenden, um ein neues Projekt zu erstellen. Lassen Sie uns ein neues React Native-Projekt mit dem Namen "TestProject" erstellen:
            </Text>
            <View style={styles.kopierTextBox2}>
            <Text style={styles.kopierText2}>
            npx react-native@latest{'\n'}
            init TestProject
            </Text>
            <TouchableOpacity style={styles.kopierTextButton2} onPress={copyToClipBoard.bind(this,"npx react-native@latest init TestProject")}>
            <Icon style={styles.kopierTextButton2} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.FließtextHeadline}> 
            Info:</Text>
            <Text style={styles.Fließtext}> 
            Wenn Sie Probleme mit iOS haben, versuchen Sie, die Abhängigkeiten neu zu installieren, indem Sie folgende Befehle im Terminal ausführen:
            </Text>
            <Text style={styles.Fließtext}> 
            1. cd ios, um zum richtigen Verzeichnis zu kommen:
            </Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            cd ios
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"cd ios")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.Fließtext}> 
            2. bundle install, um Bundle zu installieren
            </Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            bundle install
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"bundle install")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.Fließtext}> 
            3. bundle exec pod install, um die iOS-Abhängigkeiten zu installieren.
            </Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            bundle exec pod install
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"bundle exec pod install")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
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
        height:100,
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
    kopierTextBox2:{
        marginTop:10,
        backgroundColor:'#03396C',
        height:65,
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
      kopierText2:{
        color:'white',
        marginLeft:0,
        marginTop:15,
      },
      kopierTextButton2:{
        marginRight:0,
        marginTop:7.5,
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
export default Site5;
