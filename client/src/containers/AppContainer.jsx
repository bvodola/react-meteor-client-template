import React, { Component } from 'react';
import Meteor, { createContainer } from 'react-meteor-client';
import App from '../components/App.jsx';

let AppContainer = createContainer(() => {

  const handle = Meteor.subscribe('tasks');

  return {
    loading: !handle.ready(),
    tasks: Meteor.collection('tasks').find()
  };

}, App);

export default AppContainer;
