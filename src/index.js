import restify from 'restify';
import bunyan from 'bunyan';
import getStoryComment from './modules/get-story-comment.js';
import postStoryComment from './modules/post-story-comment.js';
import deleteStoryComment from './modules/delete-story-comment.js';
import getStoryImageComment from './modules/get-story-image-comment.js';
import postStoryImageComment from './modules/post-story-image-comment.js';
import deleteStoryImageComment from './modules/delete-story-image-comment.js';


global.log = bunyan.createLogger({ name: 'lilitofu-api-comment' });

const server = restify.createServer({ log });

server.use(restify.bodyParser());

server.use((req, res, next) => {
  // to avoid the ALB health check floods the log
  if (req.url !== '/comment/health') {
    log.info(req.method, req.url);
  }
  next();
});

// routes
server.get('/comment/health', (req, res, next) => {
  res.send(200, 'ok');
});
server.get('/comment/ping', (req, res, next) => {
  res.send(200, 'ok');
});
server.get('/comment/:commentId/story', getStoryComment);
server.post('/comment/story', postStoryComment);
server.delete('/comment/:commentId/story', deleteStoryComment);
server.get('/comment/:commentId/image', getStoryImageComment);
server.post('/comment/image', postStoryImageComment);
server.delete('/comment/:commentId/image', deleteStoryImageComment);

server.listen(process.env.PORT || 3000, () => {
  log.info(`${server.name} listening at ${server.url}`);
});
