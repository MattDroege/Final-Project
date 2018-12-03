import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_Page',
  action() {
  	console.log("precious");
    BlazeLayout.render('App_Body', { main: 'Home_Page' });
  },
});