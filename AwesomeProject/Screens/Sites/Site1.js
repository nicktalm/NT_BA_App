import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const SignIn = ({navigation})=>{

  function navigate(){
    navigation.navigate('Site2');
  }

    return(
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.TextButton} onPress={navigate}>
                    <Text style={styles.SignUpText}>Seite 1</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView:{
      marginTop:80,
      flex:1,
      flexDirection:'column',
      justifyContent:'',
      alignItems:'center',
    },
    


  })
export default SignIn;