import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Passwords } from '../../api/passwords/passwords.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful edit, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  EditPasswordForm: {
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_Passwords');
      console.log("list pass success");
    },
  },
});

Template.Edit_Password.helpers({
  getDoc() {
    
    return Passwords.findOne(FlowRouter.getParam('_id'));
  },
  passwordsCollection() {
    return Passwords;
  },
});

