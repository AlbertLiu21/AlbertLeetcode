'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _dynamodb = require('../libs/dynamodb');

var _dynamodb2 = _interopRequireDefault(_dynamodb);

var _dbDefault = require('../libs/db-default');

var _dbDefault2 = _interopRequireDefault(_dbDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var postComment = function postComment(params) {
  return new _promise2.default(function (resolve, reject) {
    var item = _dbDefault2.default.add({
      storyId: params.storyId,
      parentId: params.parentId,
      userId: params.userId,
      content: params.content,
      thanks: 0
    });
    _dynamodb2.default.table('StoryComment').insert(item, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(item.id);
      }
    });
  });
};

exports.default = function (_ref, res) {
  var params = _ref.params;

  postComment(params).then(function (id) {
    res.send(200, id);
  }).catch(function (error) {
    res.send(500, error);
  });
};