import DynamoDB from '../libs/dynamodb';
import DBDefault from '../libs/db-default';

const postComment = (params) => {
  return new Promise((resolve, reject) => {
    const item = DBDefault.add({
      storyId: params.storyId,
      parentId: params.parentId,
      userId: params.userId,
      content: params.content,
      thanks: 0
    });
    DynamoDB
      .table('StoryComment')
      .insert(item, (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(item.id);
        }
      });
  });
};

export default ({ params }, res) => {
  postComment(params).then((id) => {
    res.send(200, id);
  }).catch((error) => {
    res.send(500, error);
  });
};