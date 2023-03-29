import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { ScreenStackHeaderRightView } from 'react-native-screens';

const Site2 = ({navigation})=>{

  function navigate(){
    navigation.navigate('SignUp');
  }

    return(
        <View style={styles.mainView}>
            <TouchableOpacity style={styles.TextButton} onPress={navigate}>
                    <Text style={styles.SignUpText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView:{
      marginTop:40,
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    


  })
export default Site2;