import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Feather';
import { Dimensions } from 'react-native';
import { copyToClipBoard } from '../../function';
import { Linking } from 'react-native';
import Video from 'react-native-video';

const Site3 = ({navigation})=>{

  /*function navigate(){
    Clipboard.setString('hello world');
    navigation.navigate('Site2');
  }*/
  function navigate(){
    navigation.navigate('Site4');
  }
  function navigate2(){
    navigation.navigate('Site2');
  }
  function navigate3(){
    navigation.navigate('Home');
  }
  
    return(
      <View>
        <ScrollView style={styles.TopView}>
            <View style={styles.HeadlineBox}>
            <Text style={styles.Headline}>Ruby</Text>
            </View>
            <Text style={styles.Fließtext}> 
            <Text style={{color: '#03396C'}} onPress={() => Linking.openURL('https://www.ruby-lang.org/en/')}>
            Ruby&nbsp;
            </Text>
            ist eine Allzweck-Programmiersprache. React Native verwendet sie in einigen Skripten, die mit der iOS-Abhängigkeitsverwaltung zusammenhängen. Wie jede Programmiersprache gibt es auch von Ruby verschiedene Versionen, die im Laufe der Jahre entwickelt wurden.</Text>
            <Text style={styles.Fließtext}> 
            React Native verwendet eine .ruby-Versionsdatei, um sicherzustellen, dass Ihre Ruby-Version mit der benötigten Version übereinstimmt. Derzeit wird macOS 13.2 mit Ruby 2.6.10 ausgeliefert, was für diese Version von React Native (2.7.6) nicht erforderlich ist. Wir empfehlen, einen Ruby-Versionsmanager zu installieren und die richtige Version von Ruby in Ihrem System zu installieren.</Text>
            <Text style={styles.Fließtext}> 
            Um die aktuelle Version von Ruby zu überprüfen, können Sie diesen Befehl ausführen:
            </Text>
            <View style={styles.kopierTextBox}>
            <Text style={styles.kopierText}>
            ruby --version
            </Text>
            <TouchableOpacity style={styles.kopierTextButton} onPress={copyToClipBoard.bind(this,"ruby --version")}>
            <Icon style={styles.kopierTextButton} name="copy" size={35} color={"#fff"}/>
            </TouchableOpacity>
            </View>
           
            <Text style={styles.Fließtext}> 
            React Native verwendet&nbsp;
            <Text style={{color: '#03396C',}} onPress={() => Linking.openURL('https://github.com/facebook/react-native/blob/v0.71.3/.ruby-version')}>
            diese Version&nbsp;
            </Text>von Ruby. Sie können die Version, die Ihr spezifisches Projekt benötigt, auch in der Datei .ruby-version im Stammverzeichnis Ihres ReactNative-Projekts finden.
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
      height:Dimensions.get("window").height-200,
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
        marginRight:10,
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
        marginBottom:30,
      },
  })
export default Site3;