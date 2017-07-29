import shortid from 'shortid';

export default {
  add: (obj) => {
    const now = new Date();
    obj.id = shortid.generate();
    obj.createdAt = now.toISOString();
    return obj;
  }
};
