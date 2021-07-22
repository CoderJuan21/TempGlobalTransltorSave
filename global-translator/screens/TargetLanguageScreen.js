import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Picker,
  Button,
} from 'react-native';
import firebase from 'firebase';
import db from '../ConfiG';
import localdb from '../localdb'

const TargetLanguage = [
  { language: 'en', text: 'English' },
  { language: 'ar', text: 'Arabic' },
  { language: 'hi', text: 'Hindi' },
  { language: 'es', text: 'Spanish' },
  { language: 'zh-CN', text: 'Chinese' },
  { language: 'vi', text: 'Vietnamese' },
  { language: 'bn', text: 'Bengali' },
  { language: 'ru', text: 'Russian' },
  { language: 'ja', text: 'Japanese' },
  { language: 'it', text: 'Italian' },
  { language: 'th', text: 'Thai' },
  { language: 'nl', text: 'Dutch' },
  { language: 'fr', text: 'French' },
  { language: 'he', text: 'Hebrew' },
  { language: 'ko', text: 'Korean' },
  { language: 'no', text: 'Norwegian ' },
  { language: 'id', text: 'Indonesian  ' },
  { language: 'pl', text: 'Polish' },
  { language: 'sv', text: 'Swedish' },
  { language: 'tr', text: 'Turkish' },
  { language: 'hr', text: 'Croatian' },
];

export default class TargetLanguageScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      primaryLanguage: 'en',
      translatedLanguage: 'en',
      currentQuestions: [],
      questions:[]
    };
  }

  getresQuestions=()=>{
    var rescategory = 'Resturant'
var resturant = localdb[rescategory];
this.setState({questions:resturant})

  }
componentDidMount=()=>{
  this.getresQuestions();
}
  findTranslation = () => {
    this.state.questions.map((item) => {
      this.fetchApitranslate(item.question);
    });
  };

  fetchApitranslate = (question) => {
    const url =
      'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
      this.state.primaryLanguage +
      '&tl=' +
      this.state.translatedLanguage +
      '&dt=t&q=' +
      question;
    console.log(url);
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          currentQuestions: [
            ...this.state.currentQuestions,
            responseJson[0][0][0],
          ],
        });
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Something went wrong. Try again later');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> THis is Target language screen </Text>
        <View style={styles.pickerdirection}>
          <Picker
            mode="dropdown"
            selectedValue={this.state.primaryLanguage}
            style={styles.picker}
            onValueChange={(itemvalue, itemindex) => {
              this.setState({ primaryLanguage: itemvalue });
            }}>
            {TargetLanguage.map((item) => {
              return <Picker.Item label={item.text} value={item.language} />;
            })}
          </Picker>

          <Picker
            mode="dropdown"
            selectedValue={this.state.translatedLanguage}
            style={styles.picker}
            onValueChange={(itemvalue, itemindex) => {
              this.setState({ translatedLanguage: itemvalue });
            }}>
            {TargetLanguage.map((item) => {
              return <Picker.Item label={item.text} value={item.language} />;
            })}
          </Picker>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.findTranslation();
            this.setState({ currentQuestions: [] });
          }}>
          <Text style={styles.buttonText}>Translate</Text>
        </TouchableOpacity>

        {this.state.currentQuestions.map((item) => {
          return <Text>{item}</Text>;
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  picker: {
    height: 40,
    width: '100%',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 4,
    color: 'black',
  },
  pickerdirection: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    width: '40%',
    alignSelf: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
});
