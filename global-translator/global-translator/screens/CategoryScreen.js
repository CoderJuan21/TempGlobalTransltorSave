/*R<esturants - Can I Have a menu? What is there to drink? Can I Have...? How much is the bill? What are the specials for today? Can I have a new ...(Fork, Spoon, Napkin)? Where is ... ___?  What do you call the waiter, Waitress, Chef, Manager, Busboy, Busgirl?  

Travel - Can you take me to? Where is ... ?  How far away is ... ? When does the ... (train, bus, ...) arrive? Are there any tourist attractions? Where is a good resturant? Where are there fun (Family) activities? 

Meeting someone new - How are you?, How is ... ?  How old are you? Goodmorning, Goodnight. What are your hobbies? Describe yourself or someone else, Physically or Personality wise.  Where do you live?Where are you orignially from?  Do you have any siblings? What grade are you in? Whats your favorite color? What is your Job? Where is your job?  

Asking about the weather, News. - Whats the weather for today?  Is it snowing? Is it Raining, Sleeting, Haliing.  What is the tempeture outside?  Is it dangerous to drive?  Is it icy outside?  Anything new happening?  Whats the score between ... and ...?  

House Objects - Television , Desk , Chair , Water bottle , phone,  kitchen , living room, dining room , bedroom, bathroom, laundry room,  laundry,  basket,  floor , wall, roof, cup , spoon , fork , knife, butter knife, house, apartment, mansion , 

School - Teacher, student, classmate, whiteboard, chalkboard, pencil, pen, binder, folder, backpack, eraser, hallway , classroom , computer , desk , cafeteria, library, gym , math, english, social studies, science, music , language arts,   
*/
import * as React from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator,} from 'react-native'
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons';


export default class CategoryScreen extends React.Component{
  
  render(){
    return(
      <View style = {styles.container}>
      <Text> This is Category Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    marginTop:25,
    justifyContent:'center'
  },
})