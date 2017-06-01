import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Tasks = new Mongo.Collection('tasks');

Meteor.methods({
  'Tasks.addOne': ({ content }) => {
    return Tasks.insert({ content });
  },
});

export { Tasks };
