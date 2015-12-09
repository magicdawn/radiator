'use strict';

const router = module.exports = require('impress-router')();

router.get('/posts', function*() {
  this.body = this.originalUrl;
});