/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login'
import profile from './screens/profile'
import Tips from './screens/tips'
import explore from './screens/explore'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator({
  explore: {
    screen:explore,
    navigationOptions:{
      tabBarLabel: 'Explore',
      tabBarIcon: ({tintColor}) =>(
        <Icon  name="ios-search" color="#90d9e6"size={24}/>
      )
    }
  },
  Tips:{
    screen:Tips,
    navigationOptions:{
      tabBarLabel: 'Tips',
      tabBarIcon: ({tintColor}) =>(
        <Icon name="ios-heart" color="#90d9e6" size={24} />
      )
    }
  },
  profile: {
    screen:profile,
    navigationOptions:{
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) =>(
        <Icon  name="ios-person" color="#90d9e6" size={24} />
      )
    }
  }
},
  {
    tabBarOptions:{
      activeTintColor : '#265961'
    },
  },
  
);

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

