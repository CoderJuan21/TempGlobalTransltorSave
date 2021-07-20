import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import LoadingScreen from '../screens/LoadingScreen';
import ForgotPassword from '../screens/ForgotPassword';
import SignUpScreen  from '../screens/SignUpScreen';
import LoginScreen from '../screens/LoginScreen';
import TargetLanguageScreen from '../screens/TargetLanguageScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TranslateScreen from '../screens/TranslateScreen';
import CategoryScreen from '../screens/CategoryScreen';
import SaveConvoScreen from '../screens/SaveConvoScreen'
import Icon from '@expo/vector-icons/Feather';
import React from 'react'


const Stack = createStackNavigator({
  CategoryScreen:{
    screen:CategoryScreen,
    navigationOptions:{
      headerShown:false
    }
  },
  TargetLanguageScreen:{
    screen:TargetLanguageScreen,
     navigationOptions:{
      headerShown:false
    }
  },
},
{
  initialRouteName:"CategoryScreen"
})

const AppTabNavigator = createBottomTabNavigator({
  Stack : {
    screen: Stack,
    navigationOptions :{
      tabBarIcon : <Icon name = 'home' size={25}/>,
      tabBarLabel : "Category",
    }
  },
  Save: {
    screen: SaveConvoScreen,
    navigationOptions :{
      tabBarIcon : <Icon name='home' size={25}/>,
      tabBarLabel : "Save",
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions :{
      tabBarIcon : <Icon name = 'home' size={25}/>,
      tabBarLabel : "Profile",
    }
  },
  Translate: {
    screen: TranslateScreen,
    navigationOptions :{
      tabBarIcon : <Icon name='home' size={25} />,
      tabBarLabel : "Translate",
    }
  }
});

const TabNavigator = createSwitchNavigator({
  SignUpScreen:{screen:SignUpScreen},
  AppTabNavigator:{screen:AppTabNavigator},
  LoadingScreen:{screen:LoadingScreen},
  Home:{screen:Home},
  LoginScreen:{screen:LoginScreen},
  ForgotPassword:{screen:ForgotPassword},
});

export default createAppContainer(TabNavigator)