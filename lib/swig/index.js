'use strict';

/**
 * module depenedencies
 */
const swig = require('predator-kit').swig;
const marked = require('marked');

/**
 * markdown
 */
swig.setFilter('marked', function(input) {
  return marked(input);
});

/**
 * datetime
 */
swig.setFilter('datetime', function(input) {
  return input.format && input.format('YYYY-MM-DD HH:mm:ss');
});