import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';
import { Linking } from 'react-native';

const Site2 = ({navigation})=>{

  /*function navigate(){
    Clipboard.setString('hello world');
    navigation.navigate('Site2');
  }*/
  function navigate(){
    navigation.navigate('Site3');
  }
  function navigate2(){
    navigation.navigate('Site1');
  }
  function navigate3(){
    navigation.navigate('Home');
  }
  
    return(
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Node & Watchman</Text>
            </View>
            <Text style={styles.Fließtext}>Ich empfehlen die Installation von Node und Watchman mit&nbsp; 
            <Text style={{color: '#03396C'}} onPress={() => Linking.openURL('https://brew.sh')}>
            Homebrew
            </Text>
            . Führen Sie die folgenden Befehle in einem Terminal aus, nachdem Sie Homebrew installiert haben:</Text>
            <View style={styles.kopierTextBox2}>
            <Text style={styles.kopierText2}>
            brew install node{'\n'}
            brew install watchman
            </Text>
            <TouchableOpacity style={styles.kopierTextButton2} onPress={copyToClipBoard.bind(this,"brew install node brew install watchman")}>
            <Icon style={styles.kopierTextButton2} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.Fließtext}>Wenn Sie Node bereits auf Ihrem System installiert haben, vergewissern Sie sich, dass es sich um Node 14 oder eine neuere Version handelt.</Text>
            <Text style={styles.Fließtext}> 
            <Text style={{color: '#03396C'}} onPress={() => Linking.openURL('https://facebook.github.io/watchman/')}>
            Watchman&nbsp;
            </Text>
            ist ein Tool von Facebook zur Überwachung von Änderungen im Dateisystem. Es wird dringend empfohlen, es zu installieren, um die Leistung zu verbessern.</Text>
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
      marginBottom:15,
      paddingLeft:30,
      paddingRight:30,
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
      marginRight:10
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
      paddingLeft:30,
      paddingRight:30,
    },
    ImageStyleBild:{
      width:Dimensions.get("window").width-60,
      height:Dimensions.get("window").width-60,
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
    }
  })
export default Site2;
