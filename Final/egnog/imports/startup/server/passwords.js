import { _ } from 'meteor/underscore';
import { Passwords } from '../../api/passwords/passwords.js';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */


/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Passwords.find().count() === 0) {
  console.log("empty");
}
