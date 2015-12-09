'use strict';

/**
 * module dependencies
 */
const router = module.exports = require('impress-router')();
const render = require('predator-kit').getRender(__dirname);
const radiator = require('lib/radiator')({
  dirname: __dirname + '/_posts'
});

router.get('/api/posts', function*() {
  this.body = radiator.parse();
});

router.get('/', function*() {
  var posts = radiator.parse();
  this.body = yield render('index', {
    posts: posts
  });
});

/**
 * post
 */
router.get('/posts/:year/:month/:day/:postFileNameNoExt', function*() {
  this.type = 'html';
  const content = radiator.renderPost(this.params.postFileNameNoExt);
  this.body = yield render('post', {
    content: content
  });
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