import { _ } from 'meteor/underscore';
import { Passwords } from '../../api/passwords/passwords.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const passwordsSeeds = [
  { url: 'www.lego.com', username: 'joeblow', password: '3314', notes: 'weirdo' },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Passwords.find().count() === 0) {
  _.each(passwordsSeeds, function seedPasswords(password) {
    Passwords.insert(password);
  });
}
