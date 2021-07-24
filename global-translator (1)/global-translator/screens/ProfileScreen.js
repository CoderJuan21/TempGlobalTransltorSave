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
      email:'',
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
       <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require('../assets/GlobalTranslator.png')}>
        <View style={styles.header}>


          <TouchableOpacity
            style={{position:'absolute',bottom:0}}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <AntDesign name="logout" color="black" size={RFValue(20)} />
          </TouchableOpacity>

          
          <Text style={{fontSize:20,fontWeight:'bold', alignSelf:'center'}}> Profile Screen </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            margin: 0,
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
        <View style={{
              width: '100%',
              padding: 8,
              marginTop: 50,
              justifyContent: 'center',
        }}>
        <Text style={{paddingLeft:40, fontWeight:'bold'}}> Account </Text>
        <TextInput
          style={{
            borderBottomWidth:2,
            borderRadius: 10,
            width: '80%',
            alignSelf: 'center',
            height: 30,
            paddingLeft: 10,
            backgroundColor:'lightgrey'
          }}
          placeholder="Account"
          value={this.state.account}
          onChangeText={(val) => {
            this.setState({ account: val });
          }}
        />
        </View>

  <View style={{
              width: '100%',
              padding: 8,
              marginTop: -20,
              justifyContent: 'center',
        }}>
<Text style={{paddingLeft:40, fontWeight:'bold', marginTop:20}}> Name </Text>
<TextInput style={{
  borderBottomWidth:2,
  borderRadius:10,
  width:'80%',
  alignSelf:'center',
  height:30,
  paddingLeft:10,
  backgroundColor:'lightgrey'
}}
placeholder="First Last"
value={this.state.name}
 onChangeText={(val) => {
            this.setState({ name: val });
          }}/>
          </View>

  <View style={{
              width: '100%',
              padding: 8,
              marginTop: -20,
              justifyContent: 'center',
        }}>
<Text style={{paddingLeft:40, fontWeight:'bold', marginTop:20}}> Email </Text>
<TextInput style={{
  borderBottomWidth:2,
  borderRadius:10,
  width:'80%',
  alignSelf:'center',
  height:30,
  paddingLeft:10,
  backgroundColor:'lightgrey'
}}
placeholder={this.state.email}/>
</View>

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
value={this.state.email}
onPress={this.onSubmit}>
<Text style={{textAlign:'center', color:'white',}}>Confirm</Text>
</TouchableOpacity>
</ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
flex:1
  }
})
