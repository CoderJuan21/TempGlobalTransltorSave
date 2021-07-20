import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import firebase from 'firebase';
import {RFValue} from 'react-native-responsive-fontsize'
import { AntDesign } from '@expo/vector-icons';

export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  render() {
    return (
      <View
        style={{
          marginTop: 30,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TextInput
          style={{
            margin: 30,
            padding: 10,
            width: '80%',
            height: 30,
            borderWidth: 1,
            borderRadius: 6,
          }}
          placeholder="Enter Email"
          onChangeText={(text) => {
            this.setState({ email: text });
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            width: '60%',
            height: 30,
            padding: 10,
            borderRadius: 2,
          }}
          onPress={() => {
            firebase.auth().sendPasswordResetEmail(this.state.email);
            Alert.alert('Email sent to reset password!');
          }}>
          <Text style={{ textAlign: 'center', color: 'white' }}>
            Send Reset Email
          </Text>
        </TouchableOpacity>

         <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate("LoginScreen");
            }}
          > 
          <AntDesign name="logout" color="#ffc34b" size={RFValue(20)}/>
            <Text>Go Back</Text>
          </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 25,
    justifyContent: 'center',
  },
});
