import React, { Component } from 'react';
import Meteor from 'react-meteor-client';

import { default as Theme } from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';

import { Button, Text, View, ScrollView, StyleSheet } from 'react-native';

import {
  StackNavigator,
  TabRouter,
  addNavigationHelpers,
  createNavigator,
} from 'react-navigation';

const Home = ({navigation}) => (
  <View>
    <Text>Home</Text>
    <Button onPress={() => navigation.navigate('Profile')} title="Go to profile screen" />
      <Button
        onPress={() => navigation.goBack(null)}
        title="Go back"
      />
  </View>
);

const Profile = ({navigation}) => (
  <View>
    <Text>Profile</Text>
    <Button onPress={() => navigation.navigate('Home')} title="Go to home screen" />
      <Button
        onPress={() => window.history.back()}
        title="Go back!"
      />
  </View>
);

const App = StackNavigator({
  Home: {
    screen: Home,
    path: ''
  },
  Profile: {
    screen: Profile,
    path: 'profile'
  },
}, {
  initialRouteName: 'Home'
});

export default App;
