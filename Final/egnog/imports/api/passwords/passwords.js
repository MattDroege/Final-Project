import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);
 
/* eslint-disable object-shorthand */

export const Passwords = new Mongo.Collection('Passwords');

/**
 * Create the schema for Stuff
 */
export const PasswordsSchema = new SimpleSchema({
  ownerId: {
     type: String,
     autoform: {
     type: "hidden",
    }
  },
  url: {
    label: 'URL',
    type: String,
    optional: true,
    max: 30,
    autoform: {
      group: 'Passwords',
      placeholder: 'URL',
    },
  },
  username: {
    label: 'Username/Email',
    type: String,
    optional: true,
    autoform: {
      group: 'Passwords',
      placeholder: 'Username or Email',
    },
  },
  password: {
    label: 'Password',
    type: String,
    optional: true,
    autoform: {
      group: 'Passwords',
      placeholder: 'Password',
    },
  },
  notes: {
    label: 'Addition Notes',
    type: String,
    optional: true,
    autoform: {
      group: 'Passwords',
      placeholder: '. . .',
    },
  },
});

Passwords.attachSchema(PasswordsSchema);
