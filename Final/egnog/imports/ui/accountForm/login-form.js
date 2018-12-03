import { Template } from "meteor/templating";

Template.Login_Form.onRendered(function enableDropDown() {
  this.$('.dropdown').dropdown();
});
