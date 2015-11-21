'use strict';

/**
 * module dependencies
 */
const router = module.exports = require('impress-router')();
const render = require('predator-kit').getRender(__dirname);
const radiator = require('lib/radiator')({
  dirname: __dirname + '/_posts'
});

router.get('/', function*() {
  this.type = 'html';
  this.body = yield render('index');
});

router.get('/posts', function*() {
  this.body = radiator.parse();
});

/**
 * post
 */
router.get('/posts/:year/:month/:day/:postFileNameNoExt', function*() {
  this.type = 'html';
  this.body = radiator.renderPost(this.params.postFileNameNoExt);
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