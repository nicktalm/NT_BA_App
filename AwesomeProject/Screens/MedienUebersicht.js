import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";




const Home = ({navigation})=>{

  function navigate1(){
    navigation.navigate('Bild_einbinden');
  }
  function navigate2(){
    navigation.navigate('Video_einbinden');
  }
  function navigate3(){
    navigation.navigate('Modell3D_einbinden');
  }
  
    return(
        <ScrollView style={styles.TopView}>
           <View style={styles.ButtonBox}>
           <TouchableOpacity style={styles.Button} onPress={navigate1}>
                <Text style={styles.ButtonText}>Bild einbinden</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate2}>
                <Text style={styles.ButtonText}>Video einbinden</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate3}>
                <Text style={styles.ButtonText}>3D-Modell einbinden</Text>
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