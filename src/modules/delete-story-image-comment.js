import DynamoDB from '../libs/dynamodb';

const deleteComment = (id) => {
  return new Promise((resolve, reject) => {
    DynamoDB
      .table('StoryImageComment')
      .where('id').eq(id)
      .delete((err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve();
        }
      });
  });
};

export default ({ params }, res) => {
  deleteComment(params.commentId).then((comment) => {
    res.send(204);
  }).catch((err) => {
    res.send(500, err);
  });
};