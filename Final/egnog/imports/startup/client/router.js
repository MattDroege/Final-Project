import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

Accounts.onLogin(function() { FlowRouter.go('/usermain/listpassword'); });

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
  	console.log("precious");
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});

FlowRouter.route('/signup', {
  name: 'Sign_Up',
  action() {
    console.log("precious");
    BlazeLayout.render('Signup_Body', { main: 'Sign_Up' });
  },
});

FlowRouter.route('/usermain', {
  name: 'User_Main',
  action() {
    console.log("precious");
    BlazeLayout.render('App_Body', { main: 'User_Main' });
  },
});

FlowRouter.route('/usermain/addpassword', {
  name: 'Add_Password',
  action() {
    console.log("precious");
    BlazeLayout.render('User_Main', { umain: 'Add_Password' });
  },
});

FlowRouter.route('/usermain/listpassword', {
  name: 'List_Passwords',
  action() {
    console.log("precious");
    BlazeLayout.render('User_Main', { umain: 'List_Passwords' });
  },
});
FlowRouter.route('/usermain/editpassword', {
  name: 'Edit_Password',
  action() {
    console.log("precious");
    BlazeLayout.render('User_Main', { umain: 'Edit_Password' });
  },
});
