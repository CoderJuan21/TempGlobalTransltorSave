import React from 'react';
import {
  Text,
  Button,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Keyboard,
  Image,
  TouchableOpacity
} from 'react-native';
import * as Speech from 'expo-speech';
import { Constants} from 'expo';
import Touchable from 'react-native-platform-touchable';


const STARTLANGUAGE = [
  { language: 'en', text: 'English' },
  { language: 'ar', text: 'Arabic' },
  { language: 'hi', text: 'Hindi' },
  { language: 'es', text: 'Spanish' },
  { language: 'zh-CN', text: 'Chinese'},
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
  { language: 'pl', text: 'Polish'},
  { language: 'sv', text: 'Swedish'},
  { language: 'tr', text: 'Turkish'},
  { language: 'hr', text: 'Croatian'},

];
const ENDLANGUAGE = [
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
  { language: 'pl', text: 'Polish'},
  { language: 'sv', text: 'Swedish'},
  { language: 'tr', text: 'Turkish'},
  { language: 'hr', text: 'Croatian'},
];

export default class TranslateScreen extends React.Component {
  static navigationOptions = {
    title: 'speak',
  };

_fetchApitranslate = () => {
  const url =
  'https://translate.googleapis.com/translate_a/single?client=gtx&sl=' +
  this.state.selectedStartLanguage.language +
   '&tl=' +
   this.state.selectedEndLanguage.language +
   '&dt=t&q=' +
this.state.text;
console.log(url);
return fetch(url)
                 .then(response=>response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            result: responseJson[0][0][0],
          },
          function() {}
        );
        console.log(responseJson[0][0][0]);
})
  .catch(error => {
        console.error(error);
      });
  };
  constructor(props) 
  {
    super(props);
    this.state = 
    {
      isLoading: true,
      result: 'Nothing here yet... Set an input!',
      text: '',
      selectedStartLanguage: STARTLANGUAGE[0],
      selectedEndLanguage: ENDLANGUAGE[0],
      pitch: 1,
      rate: 0.75,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Choose A Language You Want To Translate</Text>
        </View>
        <View style={styles.translateContainer}>
          <View
            style={{
              flex: 1,
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 20,
              alignItems: 'center',
            }}>
           
            <Text style={{fontSize:20, color:'#f5a201'}}>From</Text>
            <ScrollView style={{borderColor:'white', borderWidth:1, width:150, height:200}}>
              {STARTLANGUAGE.map(this._renderStartLanguage)}
            </ScrollView>
          </View>
         
          <View
            style={{
              borderColor: 'black',
              borderWidth: 2,
              borderRadius: 20,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{fontSize:20, color:'#f5a201'}}>To</Text>

            <ScrollView style={{borderColor:'white', borderWidth:2.5, width:150, height:200}}>{ENDLANGUAGE.map(this._renderEndLanguage)}
            </ScrollView>
</View>
</View>
            <TextInput
            style={styles.textInput}
            multiline={true}
            placeholder={'Enter Text'}
            onChangeText={text => this.setState({ text:text })}
/>
        
       <View style={{marginTop:20,marginBottom:20, width:'100%', flexDirection:'row', justifyContent:'space-evenly'}}>
          <TouchableOpacity
          style={{backgroundColor:'orange', width:'40%',height:40, justifyContent:'center',alignItems:'center', borderRadius:10}}
          onPress={this._fetchApitranslate}>
          <Text style={{fontWeight:'bold',fontSize:15, alignSelf:'center',textAlign:'center'}} > Translate </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{backgroundColor:'orange', width:'40%',height:40, justifyContent:'center',alignItems:'center',borderRadius:10}}
        onPress={this._speak}>
           <Text style={{fontWeight:'bold',fontSize:15, alignSelf:'center',textAlign:'center'}} > Speak </Text>
          </TouchableOpacity>
          </View>
          
        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1 }}>
          <Text
            style={{
              flex: 1,
          marginTop:50,
              borderColor: '#00537a',
              borderWidth: 3,
              height: 100,
            }}
            onPress={this._speak}>
            {this.state.result}
          </Text>
        </View>
        <View style={{ flex: 2 }} />
      </View>
    );
}
  _speak = () => {
    const start = () => {};
    const complete = () => {};

    Speech.speak(this.state.result, {
      language: "en",
    });
    console.log('speak');
  };
  _renderStartLanguage = (language, i) => {
    let { selectedStartLanguage } = this.state;
    let isSelected = selectedStartLanguage === language;

    return (
      <Touchable
        key={i}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        onPress={() => this._selectStartLanguage(language)}>
        <Text style={[styles.translateText, isSelected && styles.selectedText]}>
          {language.text} ({language.language})
        </Text>
      </Touchable>
    );
  };
  _selectStartLanguage = language => {
    this.setState({ selectedStartLanguage: language });
};
  _renderEndLanguage = (language, i) => {
let { selectedEndLanguage } = this.state;
let isSelected = selectedEndLanguage === language;

    return (
      <Touchable
        key={i}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        onPress={() => this._selectEndLanguage(language)}>
        <Text style={[styles.translateText, isSelected && styles.selectedText]}>
          {language.text} ({language.language})
        </Text>
      </Touchable>
    );
  };

  _selectEndLanguage = language => {
    this.setState({ selectedEndLanguage: language });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: 'white',
    padding: 10
  },
   headerContainer: {
    marginHorizontal: 30,
    marginTop: 5,
    height:30,
    width:280,
    marginBottom:20,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 40,
    color:"black",
    marginLeft:0,
    marginTop:10,
    alignItems:'center',
    justifyContent:'center',
  },
   translateContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:80,
  },
  translateText: {
    fontSize: 10,
    color: 'black',
    marginVertical: 5,
  },
  textInput: {
    borderColor: 'black',
    height:100,
    borderWidth: 2,
    borderRadius: 0,
    padding: 10,
    flex: 1,
    marginTop:100,
  },
   selectedText: {
    color: '#00abff',
  },
});
