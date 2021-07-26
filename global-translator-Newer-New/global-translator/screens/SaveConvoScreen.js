import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import db from '../ConfiG';

export default class SaveConvoScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allSentences: [],
      currentUser: 'juans@gmail.com',
      sentence:''
    };
  }

  addSentence = async() => {
var response = await db.collection("sentences").where("email","==",this.state.currentUser).get()
response.docs.map((res)=>{
var store = res.data().sentences
store.push(this.state.sentence)
this.setState({allSentences:store})
db.collection('sentences').doc(res.id).update({sentences:store})
})
  };
  getSentence = async () => {
    var response = await db
      .collection('sentences')
      .where('email', '==', this.state.currentUser)
      .get();
    console.log(response.docs);
    response.docs.map((doc) => {
      var temp = doc.data().sentences;
      this.setState({ allSentences: temp });
      console.log(doc.data());
    });
  };
  componentDidMount = () => {
    this.getSentence();
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            borderWidth: 1,
            flexDirection: 'row',
            width: '80%',
            height: 30,
            borderRadius: 8,
            paddingLeft: 10,
            marginTop: 50,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.addSentence();
            }}>
            <AntDesign name="plus" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={{ width: '80%', paddingLeft: 10 }}
            placeholder="Add a sentence"
            onChangeText={(val) => {
              this.setState({ sentence: val });
            }}
          />

        </View>
        {this.state.allSentences.map((item) => {
          return <Text>{item}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
