'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  add: function add(obj) {
    var now = new Date();
    obj.id = _shortid2.default.generate();
    obj.createdAt = now.toISOString();
    return obj;
  }
};