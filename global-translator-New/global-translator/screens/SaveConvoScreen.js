import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native'
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons';


export default class SaveConvoScreen extends React.Component{
  
  render(){
    return(
      <View style = {styles.container}>
      <Text> This is Save Screen </Text>
      
      </View>
    );
  }
}

/*const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
*/

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    marginTop:25,
    justifyContent:'center'
  },
})