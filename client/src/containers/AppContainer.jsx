import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-meteor-client';
import BrowserAppContainer from './BrowserAppContainer.jsx';
import App from '../components/App.jsx';

let AppContainer = createContainer(() => {

  const handle = Meteor.subscribe('tasks');

  return {
    loading: !handle.ready(),
    tasks: Meteor.collection('tasks').find()
  };

}, BrowserAppContainer(App));

export default AppContainer;
