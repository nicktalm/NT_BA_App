import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import ArrowRightIcon from 'react-native-vector-icons/Feather';

const Home = ({navigation})=>{

  function navigate(){
    navigation.navigate('Site1');
  }
  function navigate2(){
    navigation.navigate('SignIn');
  }
  function navigate3(){
    navigation.navigate('Uebersicht');
  }
  function navigate4(){
    navigation.navigate('TestUebersicht');
  }
  function navigate5(){
    navigation.navigate('MedienUebersicht');
  }
  function navigate6(){
    navigation.navigate('Ueber_mich');
  }
    return(
        <ScrollView style={styles.TopView}>
           <View style={styles.ButtonBox}>
           <TouchableOpacity style={styles.Button}  onPress={navigate6}>
                <Text style={styles.ButtonText}>Über mich</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate}>
                <Text style={styles.ButtonText}>Tutorial starten</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate3}>
                <Text style={styles.ButtonText}>Tutorial Übersicht</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate5}>
                <Text style={styles.ButtonText}>Medien einbinden Übersicht</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate4}>
                <Text style={styles.ButtonText}>Flexbox-Testen Übersicht</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate2}>
                <Text style={styles.ButtonText}>Abmelden</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    TopView:{
      marginTop:0,
      backgroundColor:'#03396C'
    },
    ButtonBox:{
        marginTop:20,
        marginLeft:40,
        marginRight:40,
      },
    Button:{
        width:'100%',
        color:"#000",
        height:60,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
      },
   

  })
  
export default Home;