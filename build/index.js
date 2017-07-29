'use strict';

var _restify = require('restify');

var _restify2 = _interopRequireDefault(_restify);

var _bunyan = require('bunyan');

var _bunyan2 = _interopRequireDefault(_bunyan);

var _getStoryComment = require('./modules/get-story-comment.js');

var _getStoryComment2 = _interopRequireDefault(_getStoryComment);

var _postStoryComment = require('./modules/post-story-comment.js');

var _postStoryComment2 = _interopRequireDefault(_postStoryComment);

var _deleteStoryComment = require('./modules/delete-story-comment.js');

var _deleteStoryComment2 = _interopRequireDefault(_deleteStoryComment);

var _getStoryImageComment = require('./modules/get-story-image-comment.js');

var _getStoryImageComment2 = _interopRequireDefault(_getStoryImageComment);

var _postStoryImageComment = require('./modules/post-story-image-comment.js');

var _postStoryImageComment2 = _interopRequireDefault(_postStoryImageComment);

var _deleteStoryImageComment = require('./modules/delete-story-image-comment.js');

var _deleteStoryImageComment2 = _interopRequireDefault(_deleteStoryImageComment);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.log = _bunyan2.default.createLogger({ name: 'lilitofu-api-comment' });

var server = _restify2.default.createServer({ log: log });

server.use(_restify2.default.bodyParser());

server.use(function (req, res, next) {
  // to avoid the ALB health check floods the log
  if (req.url !== '/comment/health') {
    log.info(req.method, req.url);
  }
  next();
});

// routes
server.get('/comment/health', function (req, res, next) {
  res.send(200, 'ok');
});
server.get('/comment/ping', function (req, res, next) {
  res.send(200, 'ok');
});
server.get('/comment/:commentId/story', _getStoryComment2.default);
server.post('/comment/story', _postStoryComment2.default);
server.del('/comment/:commentId/story', _deleteStoryComment2.default);
server.get('/comment/:commentId/image', _getStoryImageComment2.default);
server.post('/comment/image', _postStoryImageComment2.default);
server.del('/comment/:commentId/image', _deleteStoryImageComment2.default);

server.listen(process.env.PORT || 3000, function () {
  log.info(server.name + ' listening at ' + server.url);
});