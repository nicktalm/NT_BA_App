import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Site1 from './Screens/Sites/Site1';
import Site2 from './Screens/Sites/Site2';
import Site3 from './Screens/Sites/Site3';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="Site1" component={Site1} options={{headerShown:true, title:'Seite 1', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Site2" component={Site2} options={{headerShown:true, title:'Seite 2', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Site3" component={Site3} options={{headerShown:true, title:'Seite 3', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:true, title:'Home', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
    </Stack.Navigator>
  </NavigationContainer>
    );
};

export default App;