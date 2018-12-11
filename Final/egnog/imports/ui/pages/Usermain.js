import { Template } from 'meteor/templating';
import '/client/lib/semantic-ui/definitions/modules/tab.js';
// The Header menu does not use dropdown menus, but most menus do.
// Here's how to do the required initialization for Semantic UI dropdown menus.

Template.User_Main.onRendered(function(){
  $('.menu .item').tab({});
})

Template.App_Body.onCreated(function userMainOnCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.App_Body.helpers({
  // placeholder: if you display dynamic data in your layout, you will put your template helpers here.
});

Template.App_Body.events({
 // placeholder: if you add a form to this top-level layout, handle the associated events here.
});
