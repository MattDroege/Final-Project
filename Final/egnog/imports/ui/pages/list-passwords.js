import { Template } from 'meteor/templating';
import { Passwords } from '../../api/passwords/passwords.js';
import { Meteor } from 'meteor/meteor';

Template.List_Passwords.helpers({

  passwordsList() {
  	var currentUser = Meteor.userId();
    return Passwords.find({ ownerId: currentUser });
  },
});
