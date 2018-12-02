import { Router } from 'meteor/iron:router';

// Route the home page.
Router.route('/', function () {
  this.render('home');
});

// Route to the sign up page.
Router.route('/signup', function() {
  this.render('Sign_Up');
});

Router.route('/Usermain', function() {
  this.render('User_Main');
});
