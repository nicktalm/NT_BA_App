import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';
import { Linking } from 'react-native';

const Site6 = ({navigation})=>{

  /*function navigate(){
    Clipboard.setString('hello world');
    navigation.navigate('Site2');
  }*/
  function navigate(){
    navigation.navigate('Site7');
  }
  function navigate2(){
    navigation.navigate('Site5');
  }
  function navigate3(){
    navigation.navigate('Home');
  }
  
    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Ausführen Ihrer{'\n'}
            React Native-Anwendung</Text>
            </View>
            <Text style={styles.FließtextHeadline}> 
            Schritt 1: Metro starten
            </Text>
            <Text style={styles.Fließtext}>
            Zunächst müssen Sie Metro starten, den JavaScript-Bundler, der mit React Native ausgeliefert wird. Metro "nimmt eine Eingabedatei und verschiedene Optionen entgegen und gibt eine einzelne JavaScript-Datei zurück, die Ihren gesamten Code und seine Abhängigkeiten enthält." -
            <Text style={{color: '#03396C',}} onPress={() => Linking.openURL('https://facebook.github.io/metro/docs/concepts/')}>
            &nbsp;Metro Docs
            </Text>
            </Text>
            
            <Text style={styles.Fließtext}> 
            Um Metro zu starten, führen Sie "npx react-native start" in Ihrem React Native-Projektordner aus:
            </Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            npx react-native start
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"npx react-native start")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.FließtextHeadline}> 
            Schritt 2: Starten Sie Ihre Anwendung
            </Text>
            <Text style={styles.Fließtext}> 
            Lassen Sie Metro Bundler in seinem eigenen Terminal laufen. Öffnen Sie ein neues Terminal in Ihrem React Native-Projektordner. Führen Sie das Folgende aus:
            </Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            npx react-native run-ios
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"bundle install")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.Fließtext}> 
            Sie sollten Ihre neue App in Kürze im iOS-Simulator ausführen können.
            </Text>
            <View style={styles.ImageStyle}>
            <Image style={styles.ImageStyleBild} source={require('/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/images/ReactNativeiPhone.png')} />
            </View>
            <Text style={styles.Fließtext}> 
            npx react-native run-ios ist eine Möglichkeit, Ihre App auszuführen. Sie können sie auch direkt in Xcode ausführen.
            </Text>
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
        marginTop:0,
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
      resizeMode:'contain',
      marginTop:80,
      marginBottom:80
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
export default Site6;
