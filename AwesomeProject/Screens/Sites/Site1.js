import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';
import ArroweRightIcon from 'react-native-vector-icons/Feather'

const SignIn = ({navigation})=>{

  function navigate(){
    navigation.navigate('Site2');
  }

    return(
        <ScrollView style={styles.mainView}>
            <TouchableOpacity style={styles.TextButton} onPress={navigate}>
                    <Text style={styles.SignUpText}>Seite 1</Text>
            </TouchableOpacity>
            <Text style={styles.Fließtext}>Hallo ich bin Fülltext: </Text>
            <View>
            <ArroweRightIcon style={styles.ArroweRightIcon} onPress={navigate} name="arrow-right" size={50} color={"#000"}/>
            </View>
        </ScrollView>
        
    )
}
const styles = StyleSheet.create({
    mainView:{
      marginTop:30,
      paddingLeft:30,
    },
    Fließtext:{
      fontWeight:"bold",
    },
    ArroweRightIcon:{
        marginTop:550,
        paddingLeft:250,
    }
    


  })
export default SignIn;