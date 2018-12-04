import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Passwords } from '../../api/passwords/passwords.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new passwords document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddPasswordForm: {
    /**
     * After successful form submission, go to List_Stuff_Page.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('List_Passwords');
    },
  },
});

Template.Add_Password.helpers({
  passwordsCollection() {
    return Passwords;
  },
});
