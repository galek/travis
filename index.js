
/**
 * Module dependencies.
 */

var template = require('tooljs-template');
var locals = require('tooljs-locals');
var tool = require('tooljs-tool');

/**
 * Expose `Generator`.
 */

var Generator = module.exports = tool('travis')
  .input('organization', { type: 'string' })
  .input('name', { type: 'string' })
  .input('repository', { type: 'string', value: '{{ organization }}/{{ name }}' })
  .input('description', { type: 'string' })
  .input('travis', { type: 'boolean', value: true })
  .input('mit', { type: 'boolean', value: true })
  .input('source', { type: 'string', value: __dirname + '/templates' })
  .input('target', { type: 'string', value: process.cwd() + '/{{ name }}' })
  .output('source', { type: 'string', value: '{{ source }}' })
  .output('target', { type: 'string', value: '{{ target }}' })
  .output('locals', { type: 'object' })
  .use(config())
  .use(locals())
  .use(template('travis.yml', '.travis.yml'));
