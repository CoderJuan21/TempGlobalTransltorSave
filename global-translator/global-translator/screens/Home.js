import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Card from '../components/Card';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Feather';
import firebase from 'firebase'
import {RFValue} from 'react-native-responsive-fontsize'

export default function Home() {
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Home</Text>
      </View>

      <Card style={{ marginVertical:10, marginHorizontal:20, padding: 20, height:'25%', overflow:'hidden', width:"90%" }}>
      <Image source={require('../assets/bg.jpg')} style={{zIndex:-1,position:'absolute',resizeMode:'stretch', borderRadius:10}}/>
        <Text style={{ fontSize: 30, fontWeight: '500', color:'black' }}>Categories</Text>
        <Text style={{ fontSize: 15,color:'black' }}>
          View frequent questions in each catergories
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color="black"
          />
        </View>
      </Card>

      <Card style={{ marginVertical:10, marginHorizontal:20, padding: 20, height:'25%', overflow:'hidden', width:"90%" }}>
      <Image source={require('../assets/bg.jpg')} style={{zIndex:-1, position:'absolute',resizeMode:'stretch', borderRadius:10,}}/>

        <Text style={{ fontSize: 30, fontWeight: '500' }}>Instant Translation</Text>
        <Text style={{ fontSize: 15 }}>
          Find out translation for your custom sentences
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color="black"
          />
        </View>
      </Card>

      <Card style={{  marginVertical:10, marginHorizontal:20, padding: 20, height:'25%', overflow:'hidden', width:"90%" }}>
      <Image source={require('../assets/bg.jpg')} style={{zIndex:-1, position:'absolute',resizeMode:'stretch', borderRadius:10,}}/>
        <Text style={{ fontSize: 30, fontWeight: '500' }}>Create Categories</Text>
        <Text style={{ fontSize: 15 }}>
          Want to create your own category of questions and sentences? Do it here!
        </Text>
        <View style={{ alignItems: 'flex-end' }}>
          <FontAwesome
            name="long-arrow-right"
            size={24}
            color="black"
          />
        </View>
      </Card>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#ccc"
  },
  header: {
    width: '100%',
    height: 80,
    paddingTop: 36,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: 'orange',
    fontSize: 20,
  },
});