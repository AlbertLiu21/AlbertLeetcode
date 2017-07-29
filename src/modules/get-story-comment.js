import DynamoDB from '../libs/dynamodb';

const getComment = (id) => {
  return new Promise((resolve, reject) => {
    DynamoDB
      .table('StoryComment')
      .where('id').eq(id)
      .get((err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
  });
};

export default ({ params }, res) => {
  getComment(params.commentId).then((comment) => {
    res.send(200, comment);
  }).catch((err) => {
    res.send(500, err);
  });
};
