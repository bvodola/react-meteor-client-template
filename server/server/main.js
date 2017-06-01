import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('tasks' , () => (Tasks.find({})) );
