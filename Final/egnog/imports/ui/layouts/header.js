import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.
Template.Header.events({
  'click .logout': ()=> {
    Meteor.logout();
    console.log("logout success");
    FlowRouter.go('/');
  }
});
