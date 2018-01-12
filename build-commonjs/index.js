'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VERSION = exports.SVD = undefined;

var _svd = require('./svd');

var _svd2 = _interopRequireDefault(_svd);

var _version = require('../version');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.SVD = _svd2.default;
exports.VERSION = _version.VERSION;