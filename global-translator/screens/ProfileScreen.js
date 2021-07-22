import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { ImageBackground, Platform } from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import db from '../ConfiG';
import { Avatar } from "react-native-elements";

export default class ProfileScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      account: '',
      image: '',
      email:'juan@gmail.com',
      id:''
    };
  }
  getProfile = async () => {
    var pro = await db
      .collection('users')
      .where('email', '==', this.state.email)
      .get();
    pro.docs.map((doc) => {
      console.log(doc.data());
      var fas = doc.data();
      this.setState({
        image: fas.image,
        name: fas.name,
        account: fas.account,
        id:doc.id
      });
    });
  };

  componentDidMount = () => {
    this.getProfile();
  };

  onSubmit=()=>{
db.collection("users").doc(this.state.id).update({
  name:this.state.name,
  account:this.state.account
})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name="arrowleft" size={24} color="black" />
          <Text style={styles.headerTitle}> Profile Screen </Text>
          <Text style={{ fontSize: 16, color: 'black' }}>Save</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            margin: 20,
          }}>
          <Avatar
            rounded
            size="large"
            source={{
              uri:
                'https://icon-library.com/images/avatar-png-icon/avatar-png-icon-3.jpg',
            }}
          />
        </View>
        <Text style={{paddingLeft:40, fontWeight:'bold'}}> Account </Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            backgroundColor: '#eee',
            borderColor: '#eee',
            paddingLeft: 10,
          }}
          placeholder="Account"
          value={this.state.account}
          onChangeText={(val) => {
            this.setState({ account: val });
          }}
        />

<Text style={{paddingLeft:40, fontWeight:'bold', marginTop:20}}> Name </Text>
<TextInput style={{
  borderWidth:2,
  borderRadius:10,
  width:'80%',
  alignSelf:'center',
  height:30,
  backgroundColor:'grey',
  borderColor:'grey',
  paddingLeft:10
}}
placeholder="First Last"
value={this.state.name}
 onChangeText={(val) => {
            this.setState({ name: val });
          }}/>
          
<Text style={{paddingLeft:40, fontWeight:'bold', marginTop:20}}> Email </Text>
<TextInput style={{
  borderWidth:2,
  borderRadius:10,
  width:'80%',
  alignSelf:'center',
  height:30,
  backgroundColor:'grey',
  borderColor:'grey',
  paddingLeft:10
}}
placeholder={this.state.email}/>

<TouchableOpacity
style={{
  alignSelf:'center',
  marginTop:40,
  borderColor:'black',
  borderWidth:1,
  borderRadius:5,
  width:'40%',
  backgroundColor:"green",
  padding:10
}}
onPress={this.onSubmit}>
value={this.state.email}
<Text style={{textAlign:'center', color:'white',}}>Confirm</Text>
</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
flex:1
  }
})
