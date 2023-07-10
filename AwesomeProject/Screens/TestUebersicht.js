import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView, Image } from "react-native";
import { Linking } from 'react-native';

const Home = ({navigation})=>{

  function navigate1(){
    navigation.navigate('Test_FlexDirection');
  }
  function navigate2(){
    navigation.navigate('Test_JustifyContent');
  }
  function navigate3(){
    navigation.navigate('Test_AlignItems');
  }
  function navigate4(){
    navigation.navigate('Test_AlignSelf');
  }
  
    return(
        <ScrollView style={styles.TopView}>
           <Text style={styles.Fließtext}>Eine komplettte Übersicht zum Thema Flexbox finden Sie <Text style={{color: 'lightblue',}} onPress={() => Linking.openURL('https://reactnative.dev/docs/flexbox')}>
            hier</Text>.</Text>
           <View style={styles.ButtonBox}>
           <TouchableOpacity style={styles.Button} onPress={navigate1}>
                <Text style={styles.ButtonText}>Flex Direction</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate2}>
                <Text style={styles.ButtonText}>Justify Content</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate3}>
                <Text style={styles.ButtonText}>Align Items</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={navigate4}>
                <Text style={styles.ButtonText}>Align Self</Text>
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
      Fließtext:{
        marginBottom:15,
        marginTop:20,
        paddingLeft:30,
        paddingRight:30,
        fontSize:15,
        color:'white'
      },
   

  })
  
export default Home;