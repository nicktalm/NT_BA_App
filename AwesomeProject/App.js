import 'react-native-gesture-handler';
import React from 'react';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import Site1 from './Screens/Sites/Site1';
import Site2 from './Screens/Sites/Site2';
import Site3 from './Screens/Sites/Site3';
import Site4 from './Screens/Sites/Site4';
import Site5 from './Screens/Sites/Site5';
import Site6 from './Screens/Sites/Site6';
import Home from './Screens/Home';
import Uebersicht from './Screens/Uebersicht';
import MedienUebersicht from './Screens/MedienUebersicht';
import Bild_einbinden from './Screens/Medien_einbinden/Bild_einbinden';
import Video_einbinden from './Screens/Medien_einbinden/Video_einbinden';
import Modell3D_einbinden from './Screens/Medien_einbinden/Modell3D_einbinden';
import TestUebersicht from './Screens/TestUebersicht';
import Test_FlexDirection from './Screens/Test/Test_FlexDirection';
import Test_JustifyContent from './Screens/Test/Test_JustifyContent';
import Test_AlignItems from './Screens/Test/Test_AlignItems';
import Test_AlignSelf from './Screens/Test/Test_AlignSelf';
import Ueber_mich from './Screens/Ueber_mich';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
      <Stack.Screen name="Site4" component={Site4} options={{headerShown:true, title:'Seite 4', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Site5" component={Site5} options={{headerShown:true, title:'Seite 5', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Site6" component={Site6} options={{headerShown:true, title:'Seite 6', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown:true, title:'Home', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:false}} />
      <Stack.Screen name="Uebersicht" component={Uebersicht} options={{headerShown:true, title:'Übersicht', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="MedienUebersicht" component={MedienUebersicht} options={{headerShown:true, title:'Medien Übersicht', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Bild_einbinden" component={Bild_einbinden} options={{headerShown:true, title:'Bild einbinden', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Video_einbinden" component={Video_einbinden} options={{headerShown:true, title:'Video einbinden', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Modell3D_einbinden" component={Modell3D_einbinden} options={{headerShown:true, title:'3DModell einbinden', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="TestUebersicht" component={TestUebersicht} options={{headerShown:true, title:'Flexbox-Test Übersicht', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Test_FlexDirection" component={Test_FlexDirection} options={{headerShown:true, title:'Flex Direction', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Test_JustifyContent" component={Test_JustifyContent} options={{headerShown:true, title:'Justify Content', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Test_AlignItems" component={Test_AlignItems} options={{headerShown:true, title:'Align Items', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Test_AlignSelf" component={Test_AlignSelf} options={{headerShown:true, title:'Align Self', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
      <Stack.Screen name="Ueber_mich" component={Ueber_mich} options={{headerShown:true, title:'Über mich', headerTintColor:'white',
            headerStyle: {backgroundColor: '#6788a6',},headerBackVisible:true}} />
     </Stack.Navigator>
  </NavigationContainer>
    );
    
};
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
export default App;

