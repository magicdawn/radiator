'use strict';

/**
 * module depenedencies
 */

const fs = require('fs-extra');
const path = require('path');
const co = require('co');
const fm = require('front-matter');
const _ = require('lodash');
const moment = require('moment');
const marked = require('marked');
const debug = require('debug')('radiator:lib');

module.exports = Radiator;

function Radiator(options) {
  if (!(this instanceof Radiator)) {
    return new Radiator(options);
  }

  this.options = options || {};
  if (!this.options.dirname) {
    throw new Error('options.dirname is required!');
  }
}

Radiator.prototype.parse = function() {
  const dirname = this.options.dirname;
  let mds = fs.readdirSync(dirname);
  mds = _(mds)
    .map(md => path.basename(md, '.md'))
    .map(this.parseFile.bind(this))
    .sort((a, b) => {
      return a.date.isBefore(b.date) ? -1 : 1;
    })
    .value();

  return mds;
};

Radiator.prototype.parseFile = function(fileNameNoExt) {
  const mdFile = `${ this.options.dirname }/${ fileNameNoExt }.md`;
  const fileContent = fs.readFileSync(mdFile, 'utf8');
  const entity = fm(fileContent);
  const meta = entity.attributes;
  debug(`%s -> %j`, fileNameNoExt, meta);

  const ret = _.assign({}, meta, {
    fileNameNoExt: fileNameNoExt,
    fileContent: entity.body,
    rawDate: meta.date,
    rawDateType: meta.date.constructor.name,
    date: moment(meta.date)
  });

  ret.link = `/posts/${ ret.date.format('YYYY/MM/DD') }/${ fileNameNoExt }`;

  return ret;
};

Radiator.prototype.renderPost = function(fileNameNoExt) {
  const parsed = this.parseFile(fileNameNoExt);
  return marked(parsed.fileContent);
};