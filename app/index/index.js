'use strict';

/**
 * module dependencies
 */
const router = module.exports = require('impress-router')();
const render = require('predator-kit').getRender(__dirname);

router.get('/', function*() {
  this.type = 'html';
  this.body = yield render('index');
});

/**
 * post
 */
router.get('/posts/:year/:month/:day/:postTitle', function*() {
  this.body = this.params;
});


/**
 * tags
 */

router.get('/tags', function*() {
  this.body = 'tags';
});

/**
 * categories
 */

router.get('/categories', function*() {
  this.body = 'categories';
});