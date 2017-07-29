'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _dynamodb = require('../libs/dynamodb');

var _dynamodb2 = _interopRequireDefault(_dynamodb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deleteComment = function deleteComment(id) {
  return new _promise2.default(function (resolve, reject) {
    _dynamodb2.default.table('StoryImageComment').where('id').eq(id).delete(function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

exports.default = function (_ref, res) {
  var params = _ref.params;

  deleteComment(params.commentId).then(function (comment) {
    res.send(204);
  }).catch(function (err) {
    res.send(500, err.message);
  });
};