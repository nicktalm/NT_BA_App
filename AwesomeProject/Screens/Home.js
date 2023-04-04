import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import ArrowRightIcon from 'react-native-vector-icons/Feather';
import '/Users/nicktalmon/Desktop/Test1/Test1/AwesomeProject/Assets/images/Mobi2.png';

const Home = ({navigation})=>{

  function navigate(){
    navigation.navigate('Site1');
  }
  function navigate2(){
    navigation.navigate('SignIn');
  }

    return(
        <ScrollView style={styles.TopView}>
           <TouchableOpacity style={styles.Button} /*</ScrollView>onPress={navigate}*/>
                <Text style={styles.ButtonText}>Über mich</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate}>
                <Text style={styles.ButtonText}>Tutorial starten</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate2}>
                <Text style={styles.ButtonText}>Abmelden</Text>
            </TouchableOpacity>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    TopView:{
      marginTop:70,
      paddingLeft:30,
      paddingRight:20,
    },
    Button:{
        width:'90%',
        color:"#000",
        height:52,
        backgroundColor:"#fff",
        borderRadius:10,
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
      },
   

  })
export default Home;