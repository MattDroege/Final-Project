import { Template } from 'meteor/templating';
import { Passwords } from '../../api/passwords/passwords.js';

Template.List_Passwords.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  passwordsList() {
    return Passwords.find();
  },
});
