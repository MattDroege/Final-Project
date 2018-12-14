import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Meteor } from 'meteor/meteor';

Accounts.onLogin(function() { FlowRouter.go('/usermain/listpassword'); });

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/signup', {
  name: 'Sign_Up',
  action() {
    BlazeLayout.render('Signup_Body', { main: 'Sign_Up' });
  },
});

FlowRouter.route('/usermain', {
  name: 'User_Main',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Main' });
  },
});

FlowRouter.route('/usermain/addpassword', {
  name: 'Add_Password',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Main', umain: 'Add_Password' });
  },
});

FlowRouter.route('/usermain/listpassword', {
  name: 'List_Passwords',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Main', umain: 'List_Passwords' });
  },
});

FlowRouter.route('/usermain/editpassword/:_id', {
  name: 'Edit_Password',
  action() {
    BlazeLayout.render('App_Body', { main: 'User_Main', umain: 'Edit_Password' });
  },
});

